// Carica l'iframe YouTube (dominio senza cookie) solo quando l'utente clicca sulla copertina.
(function () {
  function avvia(box) {
    var id = box.getAttribute("data-yt");
    if (!id) return;
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0&modestbranding=1&hl=it";
    f.title = box.getAttribute("data-titolo") || "Video";
    f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    f.setAttribute("allowfullscreen", "");
    f.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    box.innerHTML = "";
    box.appendChild(f);
    box.classList.add("video-attivo");
  }
  document.addEventListener("click", function (e) {
    var box = e.target.closest && e.target.closest(".video[data-yt]");
    if (box && !box.classList.contains("video-attivo")) { e.preventDefault(); avvia(box); }
  });
  // Selettore episodi nelle schede con piu' video
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-episodio]");
    if (!b) return;
    var lista = b.closest(".episodi");
    var box = document.getElementById(lista.getAttribute("data-video"));
    if (!box) return;
    lista.querySelectorAll("[data-episodio]").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
    box.setAttribute("data-yt", b.getAttribute("data-episodio"));
    box.setAttribute("data-titolo", b.getAttribute("data-titolo") || "");
    box.classList.remove("video-attivo");
    var desc = document.getElementById(lista.getAttribute("data-descrizione"));
    if (desc && b.getAttribute("data-testo")) desc.textContent = b.getAttribute("data-testo");
    avvia(box);
  });
})();
