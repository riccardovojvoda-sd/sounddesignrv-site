// Carica l'iframe YouTube (dominio senza cookie) solo quando l'utente clicca sulla copertina.
(function () {
  var ORIGINE_YT = "https://www.youtube-nocookie.com";

  function avvia(box, secondi) {
    var id = box.getAttribute("data-yt");
    if (!id) return;
    var f = document.createElement("iframe");
    var url = ORIGINE_YT + "/embed/" + id + "?autoplay=1&rel=0&modestbranding=1&hl=it&enablejsapi=1&origin=" + encodeURIComponent(location.origin);
    if (secondi) url += "&start=" + secondi;
    f.src = url;
    f.title = box.getAttribute("data-titolo") || "Video";
    f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    f.setAttribute("allowfullscreen", "");
    f.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    f.addEventListener("load", function () {
      // Chiede al player di mandarci lo stato (tempo corrente) per seguire i capitoli
      comanda(f, { event: "listening", id: id, channel: "widget" });
    });
    box.innerHTML = "";
    box.appendChild(f);
    box.classList.add("video-attivo");
  }

  function comanda(iframe, msg) {
    try { iframe.contentWindow.postMessage(JSON.stringify(msg), ORIGINE_YT); } catch (e) {}
  }

  document.addEventListener("click", function (e) {
    var box = e.target.closest && e.target.closest(".video[data-yt]");
    if (box && !box.classList.contains("video-attivo")) { e.preventDefault(); avvia(box); }
  });

  // Capitoli dello showreel: al clic si parte da quel punto (o si salta, se il video e' gia' in corso)
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-capitolo]");
    if (!b) return;
    var nav = b.closest("[data-video-capitoli]");
    var box = nav.parentElement.querySelector(".video[data-yt]");
    if (!box) return;
    var t = parseInt(b.getAttribute("data-capitolo"), 10) || 0;
    if (box.classList.contains("video-attivo")) {
      var f = box.querySelector("iframe");
      comanda(f, { event: "command", func: "seekTo", args: [t, true] });
      comanda(f, { event: "command", func: "playVideo", args: [] });
    } else {
      avvia(box, t);
    }
    evidenzia(nav, t);
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  function evidenzia(nav, tempo) {
    var corrente = null;
    nav.querySelectorAll("[data-capitolo]").forEach(function (x) {
      if (parseInt(x.getAttribute("data-capitolo"), 10) <= tempo + 0.5) corrente = x;
    });
    nav.querySelectorAll("[data-capitolo]").forEach(function (x) {
      if (x === corrente) x.setAttribute("aria-current", "true"); else x.removeAttribute("aria-current");
    });
  }

  // Il player manda il tempo corrente: il capitolo in riproduzione si evidenzia da solo
  window.addEventListener("message", function (e) {
    if (e.origin !== ORIGINE_YT || typeof e.data !== "string") return;
    var d; try { d = JSON.parse(e.data); } catch (err) { return; }
    if (!d || d.event !== "infoDelivery" || !d.info || typeof d.info.currentTime !== "number") return;
    document.querySelectorAll("[data-video-capitoli]").forEach(function (nav) {
      var f = nav.parentElement.querySelector(".video iframe");
      if (f && f.contentWindow === e.source) evidenzia(nav, d.info.currentTime);
    });
  });

})();

// FAQ: una sola aperta alla volta (l'attributo name lo fa nativamente; questo copre i browser vecchi)
document.addEventListener("toggle", function (e) {
  var d = e.target;
  if (!d.matches || !d.matches("details[name]") || !d.open) return;
  document.querySelectorAll('details[name="' + d.getAttribute("name") + '"][open]').forEach(function (x) { if (x !== d) x.open = false; });
  // Chiudendo quella prima, il contenuto si sposta: si riallinea la domanda appena aperta in cima allo schermo
  requestAnimationFrame(function () { d.scrollIntoView({ behavior: "smooth", block: "start" }); });
}, true);
