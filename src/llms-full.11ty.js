// llms-full.txt: testo integrale di FAQ e guide in italiano, in un solo file da dare in pasto agli agenti AI.
// Indice sintetico: /llms.txt. Le FAQ arrivano da _data/faq.js (HTML ridotto a testo), le guide dal Markdown originale.
const testo = (html) =>
  html
    .replace(/<li[^>]*>/g, "\n- ")
    .replace(/<\/(p|ul|ol|h\d)>/g, "\n")
    .replace(/<br\s*\/?>/g, "\n")
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([^<]*)<\/a>/g, (m, href, t) => `${t} (${href.startsWith("/") ? "https://www.sounddesignrv.com" + href : href})`)
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

class LlmsFull {
  data() {
    return { permalink: "/llms-full.txt", eleventyExcludeFromCollections: true };
  }
  render(data) {
    const url = data.sito.url;
    const faq = data.faq.it.map((f) => `### ${f.domanda}\n\n${testo(f.risposta)}`).join("\n\n");
    const guide = (data.collections.approfondimenti || [])
      .map((a) => `---\n\n# ${a.data.titolo}\n\nFonte: ${url}${a.url}\n\n${(a.rawInput || "").trim()}`)
      .join("\n\n");
    return `# Sound Design RV - Riccardo Vojvoda: testo integrale

> Sound designer, audio post-producer e fonico di presa diretta, Italia (Pordenone / Friuli Venezia Giulia). Contatto: ${data.sito.email}, ${data.sito.telefono}. Indice sintetico: ${url}/llms.txt

## FAQ

${faq}

## Guide

${guide}
`;
  }
}
module.exports = LlmsFull;
