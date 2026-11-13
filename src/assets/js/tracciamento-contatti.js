// Provenienza delle visite e contatti (21/10/2026): le due informazioni che contano di più.
// 1. Alla prima pagina della visita salva la provenienza (utm_source + utm_medium dei link corti, o il sito da cui si arriva)
//    in sessionStorage: resta nel browser, nessun cookie, sparisce chiudendo la scheda.
// 2. Clic su mail, telefono, WhatsApp, PDF = evento "contatto" in Analytics (solo se il visitatore ha accettato i cookie).
// 3. La mail parte con l'oggetto già scritto ("Dal sito: <pagina> · <provenienza>") e WhatsApp con la prima frase:
//    così si sa da dove arriva ogni contatto anche quando Analytics non lo vede.
(function () {
  var K = "provenienza", radice = document.documentElement;

  function provenienza() { try { return sessionStorage.getItem(K) || ""; } catch (e) { return ""; } }

  if (!provenienza()) {
    var q = new URLSearchParams(location.search), p = "";
    if (q.get("utm_source")) p = q.get("utm_source") + (q.get("utm_medium") ? " " + q.get("utm_medium") : "");
    else if (document.referrer && document.referrer.indexOf(location.origin) !== 0) {
      try { p = new URL(document.referrer).hostname.replace(/^www\./, ""); } catch (e) {}
    }
    try { sessionStorage.setItem(K, p || "diretto"); } catch (e) {}
  }

  window.tracciaEvento = function (nome, parametri) {
    if (window.__gaCaricato && window.gtag) window.gtag("event", nome, parametri || {});
  };

  // la pagina da cui si scrive: il lavoro (data-origine nelle schede), altrimenti il titolo
  function pagina() {
    var o = document.querySelector("[data-origine]");
    if (o) return o.getAttribute("data-origine");
    var h = document.querySelector("h1");
    return (h ? h.textContent : document.title).replace(/\s+/g, " ").trim();
  }

  function etichetta() {
    var prov = provenienza();
    return pagina() + (prov && prov !== "diretto" ? " · " + prov : "");
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var h = a.getAttribute("href"), metodo = "";
    if (h.indexOf("mailto:") === 0) {
      metodo = "mail";
      if (h.indexOf("subject=") < 0) {
        var oggetto = (radice.getAttribute("data-oggetto-mail") || "") + ": " + etichetta();
        a.setAttribute("href", h + (h.indexOf("?") < 0 ? "?" : "&") + "subject=" + encodeURIComponent(oggetto));
        // al clic successivo l'oggetto si riscrive da capo
        setTimeout(function () { a.setAttribute("href", h); }, 1000);
      }
    } else if (h.indexOf("tel:") === 0) {
      metodo = "telefono";
    } else if (h.indexOf("https://wa.me/") === 0) {
      metodo = "whatsapp";
      var frase = (a.getAttribute("data-whatsapp") || radice.getAttribute("data-whatsapp") || "") + " (" + etichetta() + ")";
      a.setAttribute("href", h.split("?")[0] + "?text=" + encodeURIComponent(frase));
    } else if (a.hasAttribute("download") || /\.pdf($|[?#])/i.test(h)) {
      metodo = "pdf";
    }
    if (metodo) window.tracciaEvento("contatto", { metodo: metodo, origine: pagina(), provenienza: provenienza() });
  });
})();
