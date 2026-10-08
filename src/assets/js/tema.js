// Pulsante luna: alterna chiaro e scuro su tutto il sito. Senza una scelta salvata il sito segue il sistema (e ne segue i cambi).
// La classe "scuro" su <html> la mette già lo script in testa a base.njk, così non c'è il lampo chiaro al caricamento.
(function () {
  var b = document.querySelector(".interruttore-scuro");
  var h = document.documentElement;
  var m = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var meta = document.querySelector('meta[name="theme-color"]');
  function scelta() { try { return localStorage.getItem("tema"); } catch (e) { return null; } }
  function applica(scuro) {
    h.classList.toggle("scuro", scuro);
    if (meta) meta.setAttribute("content", scuro ? "#2F302C" : "#FFFBFA");
    if (b) b.setAttribute("aria-pressed", scuro ? "true" : "false");
  }
  applica(h.classList.contains("scuro"));
  if (m && m.addEventListener) m.addEventListener("change", function (e) { if (!scelta()) applica(e.matches); });
  if (!b) return;
  b.addEventListener("click", function () {
    var scuro = !h.classList.contains("scuro");
    applica(scuro);
    // Se la scelta coincide col sistema non la salvo: così il sito torna a seguire il sistema
    try {
      if (m && scuro === m.matches) localStorage.removeItem("tema");
      else localStorage.setItem("tema", scuro ? "scuro" : "chiaro");
    } catch (e) {}
  });
})();
