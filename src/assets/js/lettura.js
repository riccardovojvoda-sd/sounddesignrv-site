// Pulsante "lettura scura" delle Guide: alterna lo sfondo Carta e lo scuro morbido, la scelta resta salvata nel browser.
// La classe su <html> la mette gia' lo script in testa alla pagina (niente lampo chiaro al caricamento).
(function () {
  var b = document.querySelector(".lettura-bottone");
  if (!b) return;
  var h = document.documentElement;
  function segna() { b.setAttribute("aria-pressed", h.classList.contains("lettura-scura") ? "true" : "false"); }
  segna();
  b.addEventListener("click", function () {
    var scura = h.classList.toggle("lettura-scura");
    try { localStorage.setItem("lettura", scura ? "scura" : "chiara"); } catch (e) {}
    segna();
  });
})();
