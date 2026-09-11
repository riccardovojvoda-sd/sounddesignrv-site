# sounddesignrv-site

Sito personale di Riccardo Vojvoda, sounddesignrv.com. Statico, generato con Eleventy 3, ospitato su Infomaniak (Hosting Starter incluso nel dominio), deploy automatico via GitHub Actions a ogni push su `main`.

## Comandi

- `npm install` (serve Node 22: `brew install node@22`)
- `npm run dev` anteprima locale su http://localhost:8090
- `npm run build` genera `_site/`

## Struttura

- `src/progetti/*.md` una scheda per progetto (front matter: brand, titolo, frase, crediti, categoria, ruolo, tema, immagine, video). Il corpo Markdown e' la descrizione. `ordine` decide la sequenza in home.
- `src/_data/sito.json` dati del sito (contatti, social, loghi clienti). `src/_data/faq.js` le FAQ (pagina + dati strutturati FAQPage).
- `src/_includes/layouts/` base, progetto, pagina. `src/_includes/parti/` testata, video, contatto, pie'.
- `src/_includes/css/sito.css` unico foglio di stile, inserito inline in ogni pagina.
- `src/assets/img/progetti/` copertine (le versioni responsive avif/webp/jpeg le genera la build in `_site/assets/img/r/`).
- `src/radice/` file copiati nella root del sito: `.htaccess` (redirect dai vecchi URL Squarespace, cache, sicurezza), icone, `robots.txt`.
- `src/llms.njk` genera `/llms.txt`, `src/sitemap.njk` la sitemap.

## Regole

- Palette: Jet `#2D2D2A`, Verdigris `#7BB5B2`, Apricot `#F6C9AC`, Flax `#EDD286`, Snow `#FFFBFA`. Carattere Poppins, servito dal sito.
- I video YouTube si caricano solo al clic (dominio `youtube-nocookie.com`), con copertina locale.
- Nei testi rivolti agli utenti niente trattini lunghi.
- La mail e' `info@sounddesignrv.com` ovunque; la gmail personale non deve comparire (il workflow lo verifica).
