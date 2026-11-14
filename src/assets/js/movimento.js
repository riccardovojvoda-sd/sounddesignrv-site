/* Entrata in sequenza mentre si scorre (decoro del 14/11/2026, stile in sito.css).
   Titoli e blocchi ricevono "visibile" quando entrano nello schermo; i figli dei blocchi partono uno dopo l'altro. */
(function () {
  var d = document.documentElement;
  window.movimentoPronto = true;
  if (!d.classList.contains("js-movimento")) return;
  var blocchi = ".griglia-schede,.anteprima-servizi,.griglia-progetti,.elenco-approfondimenti,.kit";
  var o = new IntersectionObserver(function (voci) {
    voci.forEach(function (v) {
      if (!v.isIntersecting) return;
      var e = v.target;
      o.unobserve(e);
      if (e.matches(blocchi)) {
        var figli = Array.prototype.slice.call(e.children);
        figli.forEach(function (f, i) { f.style.transitionDelay = Math.min(i, 8) * (e.classList.contains("kit") ? 0.05 : 0.12) + "s"; });
        // ritardo tolto a entrata finita, così il passaggio del mouse risponde subito
        setTimeout(function () { figli.forEach(function (f) { f.style.transitionDelay = ""; }); }, 2000);
      }
      e.classList.add("visibile");
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
  document.querySelectorAll(".prosa h2,.anteprima-testa," + blocchi).forEach(function (e) { o.observe(e); });
})();
