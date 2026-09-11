// Configurazione Eleventy per sounddesignrv.com
// Sorgenti in src/, output in _site/. Immagini responsive con @11ty/eleventy-img.
const path = require("path");
const Image = require("@11ty/eleventy-img");
const { minify } = require("html-minifier-terser");

const LARGHEZZE = [480, 800, 1200, 1600];

module.exports = function (eleventyConfig) {
  // File copiati tali e quali
  eleventyConfig.addPassthroughCopy({ "src/assets/font": "assets/font" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/video": "assets/video" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img/loghi": "assets/img/loghi" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img/logo-sdrv-96.png": "assets/img/logo-sdrv-96.png", "src/assets/img/logo-sdrv.png": "assets/img/logo-sdrv.png" });
  eleventyConfig.addPassthroughCopy({ "src/assets/*.pdf": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/radice": "." });
  eleventyConfig.addWatchTarget("src/assets/css");

  // Collezione progetti ordinata per campo "ordine"
  const perOrdine = (a, b) => a.data.ordine - b.data.ordine;
  eleventyConfig.addCollection("progetti", (api) => api.getFilteredByTag("progetti").sort(perOrdine));
  eleventyConfig.addCollection("progetti_it", (api) => api.getFilteredByTag("progetti").sort(perOrdine));
  eleventyConfig.addCollection("progetti_en", (api) => api.getFilteredByTag("progetti_en").sort(perOrdine));

  // Shortcode immagine responsive: {% img "progetti/pitars.jpg", "alt", "(min-width: 60em) 50vw, 100vw", "lazy" %}
  eleventyConfig.addAsyncShortcode("img", async function (src, alt, sizes = "100vw", loading = "lazy", classe = "") {
    const sorgente = path.join("src/assets/img", src);
    const metadata = await Image(sorgente, {
      widths: LARGHEZZE,
      formats: ["avif", "webp", "jpeg"],
      outputDir: "_site/assets/img/r/",
      urlPath: "/assets/img/r/",
      filenameFormat: (id, s, width, format) =>
        `${path.basename(s, path.extname(s))}-${width}.${format}`,
      sharpJpegOptions: { quality: 78, mozjpeg: true },
      sharpWebpOptions: { quality: 76 },
      sharpAvifOptions: { quality: 52 },
    });
    return Image.generateHTML(metadata, {
      alt,
      sizes,
      loading,
      decoding: "async",
      class: classe || undefined,
      fetchpriority: loading === "eager" ? "high" : undefined,
    });
  });

  // Solo l'URL della versione jpeg piu' grande (per og:image e JSON-LD)
  eleventyConfig.addAsyncShortcode("imgUrl", async function (src, width = 1200) {
    const metadata = await Image(path.join("src/assets/img", src), {
      widths: [width],
      formats: ["jpeg"],
      outputDir: "_site/assets/img/r/",
      urlPath: "/assets/img/r/",
      filenameFormat: (id, s, w, format) => `${path.basename(s, path.extname(s))}-${w}.${format}`,
      sharpJpegOptions: { quality: 80, mozjpeg: true },
    });
    return metadata.jpeg[0].url;
  });

  // Filtri
  const md = require("markdown-it")({ html: true, typographer: false });
  eleventyConfig.addFilter("md", (testo) => md.render(String(testo || "").trim()));
  eleventyConfig.addFilter("testoPiano", (html) =>
    String(html || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
  );
  eleventyConfig.addFilter("slugTema", (tema) => `tema-${tema || "snow"}`);
  eleventyConfig.addFilter("tempo", (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`);
  eleventyConfig.addFilter("anno", () => new Date().getFullYear());
  eleventyConfig.addFilter("dataIso", (d) => (d instanceof Date ? d : new Date(d)).toISOString().slice(0, 10));
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v));
  // Versioni della stessa pagina nelle altre lingue: pagine con la stessa "chiave", italiano per primo
  const ORDINE_LINGUE = ["it", "en", "fr", "es"];
  eleventyConfig.addFilter("traduzioni", (tutte, chiave) => {
    if (!chiave) return [];
    return tutte
      .filter((p) => p.data.chiave === chiave && p.url)
      .map((p) => ({ lang: p.data.lang || "it", url: p.url }))
      .sort((a, b) => ORDINE_LINGUE.indexOf(a.lang) - ORDINE_LINGUE.indexOf(b.lang));
  });
  eleventyConfig.addFilter("faqSchema", (faq) =>
    faq.map((f) => ({
      "@type": "Question",
      name: f.domanda,
      acceptedAnswer: { "@type": "Answer", text: f.risposta.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim() },
    }))
  );

  // HTML minificato in produzione
  eleventyConfig.addTransform("minifica", async function (contenuto) {
    if (process.env.ELEVENTY_RUN_MODE !== "build" || process.env.NO_MINIFY) return contenuto;
    if (!(this.page.outputPath || "").endsWith(".html")) return contenuto;
    return minify(contenuto, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      conservativeCollapse: true,
    });
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
