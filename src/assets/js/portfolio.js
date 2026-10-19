// Filtri del portfolio: genere (una pagina per genere, qui si cambia senza ricaricare) e ruolo (?ruolo= nell'URL).
// Cambiando genere si aggiornano indirizzo, titolo, descrizione e selettore lingua, come se si fosse aperta la pagina di quel genere.
(function () {
  var box = document.querySelector("[data-portfolio]");
  var griglia = document.querySelector("[data-griglia]");
  if (!box || !griglia) return;
  var voci = Array.prototype.slice.call(griglia.children);
  var conta = box.querySelector("[data-conta]");
  var vuoto = document.querySelector("[data-vuoto]");
  var azzera = box.querySelector("[data-azzera]");
  var descrizione = document.querySelector("[data-descrizione]");
  var indirizzi = {};
  try { indirizzi = JSON.parse(document.querySelector("[data-portfolio-url]").textContent); } catch (e) {}
  var lingua = document.documentElement.lang || "it";
  var ruoliValidi = Array.prototype.map.call(box.querySelectorAll("[data-gruppo=ruolo] .chip"), function (b) { return b.dataset.v; });
  var stato = { genere: box.dataset.genere || "", ruolo: "" };

  function haRuolo(li, r) { return !r || (" " + li.dataset.ruoli + " ").indexOf(" " + r + " ") >= 0; }
  function haGenere(li, g) { return !g || li.dataset.genere === g; }

  function applica(cambiaGenere) {
    var n = 0;
    voci.forEach(function (li) {
      var ok = haGenere(li, stato.genere) && haRuolo(li, stato.ruolo);
      li.hidden = !ok;
      if (ok) n++;
    });
    // Ogni chip mostra quanti progetti darebbe, insieme all'altro filtro già scelto; a zero si spegne
    box.querySelectorAll("[data-gruppo]").forEach(function (gruppo) {
      var chi = gruppo.dataset.gruppo;
      gruppo.querySelectorAll(".chip").forEach(function (b) {
        var v = b.dataset.v;
        var attivo = v === stato[chi];
        b.classList.toggle("attivo", attivo);
        if (b.tagName === "BUTTON") b.setAttribute("aria-pressed", attivo);
        else if (attivo) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
        var quanti = voci.filter(function (li) {
          return chi === "genere" ? haGenere(li, v) && haRuolo(li, stato.ruolo) : haRuolo(li, v) && haGenere(li, stato.genere);
        }).length;
        var num = b.querySelector(".chip-n");
        if (num) num.textContent = quanti;
        b.classList.toggle("spento", quanti === 0 && !attivo);
      });
    });
    conta.textContent = n === 1 ? conta.dataset.uno : conta.dataset.molti.replace("{n}", n);
    vuoto.hidden = n > 0;
    azzera.hidden = !(stato.genere || stato.ruolo);

    var chipGenere = box.querySelector("[data-gruppo=genere] .chip[data-v='" + stato.genere + "']");
    var url = chipGenere.getAttribute("href") + (stato.ruolo ? "?ruolo=" + stato.ruolo : "");
    history.replaceState(null, "", url);
    if (cambiaGenere) {
      document.title = chipGenere.dataset.titolo;
      if (descrizione) descrizione.textContent = chipGenere.dataset.descrizione;
      // Selettore lingua (testata e pie'): stessa pagina di genere nell'altra lingua, con lo stesso ruolo
      document.querySelectorAll(".lingue a[hreflang], .lingue-lista a[hreflang]").forEach(function (a) {
        var l = a.getAttribute("hreflang");
        if (indirizzi[l]) a.setAttribute("href", indirizzi[l][stato.genere] + (stato.ruolo ? "?ruolo=" + stato.ruolo : ""));
      });
    }
  }

  box.addEventListener("click", function (e) {
    var b = e.target.closest(".chip");
    if (!b) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey) return; // apre la pagina del genere in un'altra scheda, come un link normale
    e.preventDefault();
    var chi = b.closest("[data-gruppo]").dataset.gruppo;
    if (stato[chi] === b.dataset.v) return;
    stato[chi] = b.dataset.v;
    applica(chi === "genere");
  });
  azzera.addEventListener("click", function () { stato = { genere: "", ruolo: "" }; applica(true); });

  var r = new URLSearchParams(location.search).get("ruolo") || "";
  stato.ruolo = ruoliValidi.indexOf(r) >= 0 ? r : "";
  applica(!!stato.ruolo);
})();
