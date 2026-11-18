/* Entrata in sequenza mentre si scorre (decoro del 14/11/2026, stile in sito.css).
   Ogni titolo e ogni scheda riceve "visibile" appena entra nello schermo: al caricamento entra subito quello che si vede,
   il resto entra man mano che si scorre. Quelli che entrano insieme partono uno dopo l'altro.
   18/11/2026: prima si osservava il blocco intero (griglia del portfolio, elenco delle guide) con soglia 12%; sul telefono
   il blocco è una colonna lunga molte schermate, la soglia non scattava al caricamento e la pagina sembrava vuota. */
(function () {
  var d = document.documentElement;
  window.movimentoPronto = true;
  if (!d.classList.contains("js-movimento")) return;
  var o = new IntersectionObserver(function (voci) {
    var n = 0;
    voci.forEach(function (v) {
      if (!v.isIntersecting) return;
      var e = v.target;
      o.unobserve(e);
      var passo = e.parentNode.classList.contains("kit") ? 0.05 : 0.12;
      var ritardo = Math.min(n++, 6) * passo;
      if (ritardo) {
        e.style.transitionDelay = ritardo + "s";
        // ritardo tolto a entrata finita, così il passaggio del mouse risponde subito
        setTimeout(function () { e.style.transitionDelay = ""; }, ritardo * 1000 + 900);
      }
      e.classList.add("visibile");
    });
  }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".prosa h2,.anteprima-testa,.griglia-schede>*,.anteprima-servizi>*,.griglia-progetti>*,.elenco-approfondimenti>*,.kit>*")
    .forEach(function (e) { o.observe(e); });
})();
