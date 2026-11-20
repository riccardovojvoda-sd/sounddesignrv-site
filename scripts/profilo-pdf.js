// Esporta il profilo PDF dalla pagina /profilo-pdf/<lingua>/ con Chrome senza finestra.
// Uso: PROFILO=1 npx @11ty/eleventy && node scripts/profilo-pdf.js it [file-di-uscita.pdf] [varianti, es. "tema=scuro"]
// Senza file di uscita scrive in _site/profilo-pdf/<lingua>/ (anteprima): il PDF del sito in src/assets si sostituisce solo dopo l'ok di Riccardo.
// Stampa via protocollo di debug (Page.printToPDF) con la carta già a 1920x1080: con --print-to-pdf Chrome valuta le
// media query del sito sulla carta Letter (circa 740 px) e la pagina esce in versione telefono.
const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

const lingua = process.argv[2] || "it";
const sito = path.join(__dirname, "..", "_site");
const uscita = path.resolve(process.argv[3] || path.join(sito, "profilo-pdf", lingua, `profilo-${lingua}.pdf`));
const varianti = process.argv[4] || "";
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const tipi = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".woff2": "font/woff2", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".svg": "image/svg+xml" };
const attesa = (ms) => new Promise((r) => setTimeout(r, ms));

const server = http.createServer((req, res) => {
  let f = path.join(sito, decodeURIComponent(req.url.split("?")[0]));
  if (f.endsWith("/")) f = path.join(f, "index.html");
  fs.readFile(f, (err, dati) => {
    if (err) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { "Content-Type": tipi[path.extname(f)] || "application/octet-stream" });
    res.end(dati);
  });
});

async function main() {
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const url = `http://127.0.0.1:${server.address().port}/profilo-pdf/${lingua}/${varianti ? "?" + varianti : ""}`;
  const profilo = fs.mkdtempSync(path.join(os.tmpdir(), "profilo-pdf-chrome-"));
  // --use-mock-keychain: senza, un profilo Chrome nuovo chiede al Mac il permesso sul Portachiavi
  const c = spawn(chrome, ["--headless=new", "--disable-gpu", "--no-first-run", "--use-mock-keychain", "--password-store=basic",
    `--user-data-dir=${profilo}`, "--remote-debugging-port=0", "--window-size=1920,1080", "about:blank"], { stdio: "ignore" });
  try {
    let porta;
    for (let i = 0; i < 100 && !porta; i++) {
      try { porta = fs.readFileSync(path.join(profilo, "DevToolsActivePort"), "utf8").split("\n")[0]; } catch { await attesa(100); }
    }
    const pagine = await (await fetch(`http://127.0.0.1:${porta}/json/list`)).json();
    const ws = new WebSocket(pagine.find((p) => p.type === "page").webSocketDebuggerUrl);
    await new Promise((r) => ws.addEventListener("open", r));
    let id = 0;
    const attese = new Map();
    ws.addEventListener("message", (e) => { const m = JSON.parse(e.data); if (attese.has(m.id)) { attese.get(m.id)(m); attese.delete(m.id); } });
    const cdp = (method, params = {}) => new Promise((r, x) => {
      const n = ++id;
      attese.set(n, (m) => (m.error ? x(new Error(method + ": " + m.error.message)) : r(m.result)));
      ws.send(JSON.stringify({ id: n, method, params }));
    });
    await cdp("Emulation.setDeviceMetricsOverride", { width: 1920, height: 1080, deviceScaleFactor: 1, mobile: false });
    await cdp("Page.navigate", { url });
    // pronta = documento caricato, font pronti, tutte le immagini decodificate
    for (let i = 0; i < 150; i++) {
      const r = await cdp("Runtime.evaluate", { expression: "document.readyState==='complete'&&document.fonts.status==='loaded'&&[...document.images].every(i=>i.complete)", returnByValue: true });
      if (r.result.value) break;
      await attesa(200);
    }
    await attesa(500);
    const { data } = await cdp("Page.printToPDF", { paperWidth: 20, paperHeight: 11.25, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0,
      printBackground: true, preferCSSPageSize: true, displayHeaderFooter: false });
    fs.writeFileSync(uscita, Buffer.from(data, "base64"));
    ws.close();
    console.log(uscita);
  } finally {
    c.kill();
    server.close();
    await attesa(300);
    fs.rmSync(profilo, { recursive: true, force: true });
  }
}
main().catch((e) => { console.error(e.message); process.exit(1); });
