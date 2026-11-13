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
    if (window.tracciaEvento) window.tracciaEvento("video_avvio", { video: f.title });
  }

  // Cartello di fine video (21/10/2026): al posto dei suggerimenti di YouTube, che portano fuori dal sito,
  // "Parliamo del tuo progetto", il lavoro successivo e "Rivedi". Solo nelle schede (data-fine sull'articolo).
  function fine(box, f) {
    var art = box.closest("[data-fine]");
    if (!art || box.querySelector(".video-fine")) return;
    var c = document.createElement("div");
    c.className = "video-fine";
    var html = '<a class="bottone" href="' + art.getAttribute("data-fine-contatto") + '">' + art.getAttribute("data-fine-contatto-testo") + "</a>";
    if (art.getAttribute("data-fine-prossimo"))
      html += '<a class="bottone bottone-secondario" href="' + art.getAttribute("data-fine-prossimo") + '">' + art.getAttribute("data-fine-prossimo-testo") + "</a>";
    html += '<button type="button" class="video-fine-rivedi">' + art.getAttribute("data-fine-rivedi") + "</button>";
    c.innerHTML = html;
    c.querySelector(".video-fine-rivedi").addEventListener("click", function () {
      c.remove();
      comanda(f, { event: "command", func: "seekTo", args: [0, true] });
      comanda(f, { event: "command", func: "playVideo", args: [] });
    });
    box.appendChild(c);
    if (window.tracciaEvento) window.tracciaEvento("video_fine", { video: f.title });
  }

  window.addEventListener("message", function (e) {
    if (e.origin !== ORIGINE_YT || typeof e.data !== "string") return;
    var d; try { d = JSON.parse(e.data); } catch (err) { return; }
    if (!d) return;
    var finito = (d.event === "onStateChange" && d.info === 0) || (d.event === "infoDelivery" && d.info && d.info.playerState === 0);
    if (!finito) return;
    document.querySelectorAll(".video-attivo iframe").forEach(function (f) {
      if (f.contentWindow === e.source) fine(f.parentElement, f);
    });
  });

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

// Tendina lingua: si chiude cliccando fuori o con Esc
document.addEventListener("click", function (e) {
  document.querySelectorAll(".lingue-tendina[open]").forEach(function (d) { if (!d.contains(e.target)) d.open = false; });
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") document.querySelectorAll(".lingue-tendina[open]").forEach(function (d) { d.open = false; });
});
