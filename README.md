# sounddesignrv-site

Sito personale di Riccardo Vojvoda, sounddesignrv.com. Statico, generato con Eleventy 3, pubblicato su GitHub Pages (repo pubblico, dominio `www.sounddesignrv.com` dal file `CNAME`), deploy automatico via GitHub Actions a ogni push su `main`. Il dominio e' registrato su Infomaniak; la posta `info@` e' il servizio Mail Starter incluso nel dominio.

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
- `src/assets/img/approfondimenti/` copertine delle guide. Regola: tutte con la stessa curva di contrasto, neri veri e bianchi pieni, niente bande nere ai bordi, così reggono anche nel tema scuro. Ogni nuova copertina passa da `python3 scripts/copertine-contrasto.py` (controllo) e, se è fuori, da `--correggi file.jpg` (corregge solo la luminosità, i colori restano). Gli screenshot di programmi sono esclusi. Le versioni ridimensionate hanno nel nome un'impronta del contenuto (`nome-82c2f2-800.avif`): se una foto viene corretta cambia l'URL e nessuna cache mostra la vecchia.
- `src/radice/` file copiati nella root del sito: `CNAME` (dominio per GitHub Pages), icone, `robots.txt`.
- `src/reindirizzi.njk` + `src/_data/reindirizzi.json`: pagine di redirect (meta refresh + noindex) dai vecchi URL Squarespace. GitHub Pages non ha `.htaccess`: niente redirect lato server, niente intestazioni personalizzate (la Content-Security-Policy sta in un `<meta>` nel layout base). Il profilo PDF viene copiato anche al vecchio percorso `/s/`.
- `src/llms.njk` genera `/llms.txt`, `src/sitemap.njk` la sitemap.
- Tema scuro (variante "Bande tinte"): `html.scuro`, messa dallo script in testa a `layouts/base.njk` se il sistema è in modalità scura o se il visitatore l'ha scelto col pulsante luna (in basso a destra su tutte le pagine, `assets/js/tema.js`, scelta in localStorage `tema`; se la scelta coincide col sistema viene tolta e il sito torna a seguire il sistema). Le regole sono in fondo a `css/sito.css`. Loghi clienti invertiti nello scuro; per H-Farm c'è `hfarm-negativo.png` (terzo campo della voce in `sito.json`). Il modulo Tally nello scuro resta su un riquadro chiaro.
- `src/network.njk` pagina `/network/` (solo italiano per ora): schede partner divise in case di produzione e agenzie, con i lavori fatti insieme e link ai loro siti, più il modulo "Proponi una collaborazione" di Tally (modulo `810X1o`, account info@sounddesignrv.com, avviso via mail a info@ a ogni invio) incorporato in un iframe; la CSP ammette `https://tally.so` in `script-src` e `frame-src`. Il link nel piè e la voce nel menu in alto (classe `menu-solo-desktop`, nascosta sotto i 60em perché non ci sta) compaiono solo nelle lingue che hanno `url.network` in `testi.js`. Regole dei testi: CROMO non si cita nelle schede degli altri partner.

## Regole

- Palette: Jet `#2D2D2A`, Verdigris `#7BB5B2`, Apricot `#F6C9AC`, Flax `#EDD286`, Snow `#FFFBFA`. Carattere Poppins, servito dal sito.
- I video YouTube si caricano solo al clic (dominio `youtube-nocookie.com`), con copertina locale.
- Nei testi rivolti agli utenti niente trattini lunghi.
- La mail e' `info@sounddesignrv.com` ovunque; la gmail personale non deve comparire (il workflow lo verifica).

## Lingue

- Italiano alla radice (`src/`), inglese in `src/en/` (`/en/`, `/en/services/`, `/en/about/`, `/en/contact/`, `/en/faq/`, `/en/projects/<slug>/`), francese in `src/fr/` (`/fr/`, `/fr/services/`, `/fr/a-propos/`, `/fr/contact/`, `/fr/faq/`, `/fr/projets/<slug>/`). Stessi slug per i progetti in tutte le lingue.
- Ogni pagina ha una `chiave` (stessa in tutte le lingue): da li' nascono i tag `hreflang`, il selettore lingua e le alternative in sitemap. Per i progetti la chiave e' calcolata dallo slug.
- Testi d'interfaccia (menu, bottoni, etichette) in `src/_data/testi.js`; FAQ in `faq.js` (it), `faq-en.js`, `faq-fr.js`.
- Selettore: tendina in testata (`details`, sigla corrente + elenco lingue, chiusa da un clic fuori o Esc) e riga di sigle nel pie'. Entrambi in `parti/lingue.njk`, che cicla sulle lingue definite in `testi.js`.
- Uno script inline nella sola home italiana manda a `/en/` o `/fr/` se il browser preferisce quella lingua e non si arriva da una pagina del sito (controllo sul referrer). Le pagine interne non vengono mai reindirizzate.
- Tipografia francese: spazio insecabile (U+00A0) prima di `? ! : ;` e dentro le virgolette « ». I file francesi lo contengono gia'.
- Quando si aggiunge una lingua: cartella `src/<lang>/` con `<lang>.json` (`{ "lang": "<lang>" }`), `progetti.json` con tag `progetti_<lang>` (la collezione nasce da sola in `.eleventy.js`), blocco in `testi.js`, `faq-<lang>.js` agganciato in `faq.js`, riga in `llms.njk` e ramo nello script lingua di `layouts/base.njk`. `ORDINE_LINGUE` in `.eleventy.js` fissa l'ordine delle alternative (it, en, fr, es).
