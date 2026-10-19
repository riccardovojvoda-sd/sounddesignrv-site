// Portfolio filtrabile (deciso il 19/10/2026): genere e ruoli di ogni progetto, uguali nelle tre lingue.
// La chiave di `progetti` è il nome del file del progetto (src/progetti/<chiave>.md, uguale in en/ e fr/).
// Sound design e mix ci sono in tutti i progetti: non sono un filtro, li dice la nota sopra la griglia.
// Un progetto nuovo va aggiunto qui, altrimenti compare solo sotto "Tutti".
module.exports = {
  generi: [
    { chiave: "spot",
      it: { nome: "Spot pubblicitari", slug: "spot", descrizione: "Spot per web, TV e social: selezione musicale, voice over, sound design e mix alla loudness giusta per ogni piattaforma." },
      en: { nome: "Commercials", slug: "commercials", descrizione: "Commercials for web, TV and social: music selection, voice-over, sound design and mixing at the right loudness for each platform." },
      fr: { nome: "Publicité", slug: "publicite", descrizione: "Spots pour le web, la télévision et les réseaux sociaux : choix musical, voix off, sound design et mixage au bon niveau de loudness pour chaque plateforme." } },
    { chiave: "branded",
      it: { nome: "Branded content", slug: "branded-content", descrizione: "Branded content e fashion film per Maserati, Alfa Romeo, Diadora, JW Anderson e Lainox: il suono che costruisce l'identità del brand." },
      en: { nome: "Branded content", slug: "branded-content", descrizione: "Branded content and fashion films for Maserati, Alfa Romeo, Diadora, JW Anderson and Lainox: sound that builds the brand's identity." },
      fr: { nome: "Branded content", slug: "branded-content", descrizione: "Branded content et fashion films pour Maserati, Alfa Romeo, Diadora, JW Anderson et Lainox : le son qui construit l'identité de la marque." } },
    { chiave: "corporate",
      it: { nome: "Video corporate", slug: "corporate", descrizione: "Video corporate e documentari aziendali: presa diretta in azienda, dialog editing, sound design e mix per racconti industriali e di territorio." },
      en: { nome: "Corporate video", slug: "corporate", descrizione: "Corporate videos and company documentaries: location sound on site, dialogue editing, sound design and mixing for industrial and regional stories." },
      fr: { nome: "Vidéo d'entreprise", slug: "entreprise", descrizione: "Vidéos d'entreprise et documentaires institutionnels : son direct sur site, montage dialogues, sound design et mixage pour des récits industriels et de territoire." } },
    { chiave: "film",
      it: { nome: "Film, documentari, immersivi", slug: "film-documentari", descrizione: "Lungometraggi, documentari e film immersivi per planetari: presa diretta, dialog editing, ADR, foley e mix stereo, 5.1 e 7.1." },
      en: { nome: "Film, documentary, immersive", slug: "film-documentary", descrizione: "Feature films, documentaries and immersive films for planetariums: location sound, dialogue editing, ADR, foley and stereo, 5.1 and 7.1 mixing." },
      fr: { nome: "Cinéma, documentaire, immersif", slug: "cinema-documentaire", descrizione: "Longs métrages, documentaires et films immersifs pour planétariums : son direct, montage dialogues, ADR, bruitage et mixage stéréo, 5.1 et 7.1." } }
  ],
  ruoli: [
    { chiave: "presa-diretta", it: "Presa diretta", en: "Location sound", fr: "Son direct" },
    { chiave: "dialoghi", it: "Dialoghi e ADR", en: "Dialogue and ADR", fr: "Dialogues et ADR" },
    { chiave: "foley", it: "Foley", en: "Foley", fr: "Bruitage" },
    { chiave: "composizione", it: "Composizione musicale", en: "Music composition", fr: "Composition musicale" },
    { chiave: "selezione", it: "Selezione musicale", en: "Music selection", fr: "Sélection musicale" },
    { chiave: "voce", it: "Voice over", en: "Voice-over", fr: "Voix off" }
  ],
  progetti: {
    "adria-were-ready": { genere: "spot", ruoli: ["selezione", "voce"] },
    "alpi-wood": { genere: "spot", ruoli: [] },
    "ponte-1948-fast-food-series": { genere: "spot", ruoli: ["selezione"] },
    "alfa-romeo-quadrifoglio": { genere: "branded", ruoli: ["composizione"] },
    "diadora-run-valley": { genere: "branded", ruoli: ["selezione", "foley"] },
    "jw-anderson-diadora-equipe": { genere: "branded", ruoli: ["foley", "selezione"] },
    "lainox-naboo": { genere: "branded", ruoli: ["selezione", "voce"] },
    "maserati-mc20": { genere: "branded", ruoli: ["composizione"] },
    "cda-50-il-viaggio": { genere: "corporate", ruoli: ["presa-diretta", "dialoghi"] },
    "fitt-industrial": { genere: "corporate", ruoli: ["foley"] },
    "pitars": { genere: "corporate", ruoli: ["composizione"] },
    "weldan": { genere: "corporate", ruoli: ["presa-diretta", "dialoghi"] },
    "sottopelle": { genere: "film", ruoli: ["presa-diretta", "dialoghi", "foley"] },
    "the-missing-head": { genere: "film", ruoli: ["dialoghi"] },
    "arcadia-earth": { genere: "film", ruoli: ["selezione", "voce"] }
  },
  // I sei progetti in home, in quest'ordine (scelto da Riccardo il 19/10/2026). `tema` è il colore della copertina solo in home,
  // scelto per alternare la palette nella griglia; nel portfolio e nella scheda resta il tema del progetto.
  evidenza: [
    { progetto: "maserati-mc20", tema: "snow" },
    { progetto: "diadora-run-valley", tema: "apricot" },
    { progetto: "pitars", tema: "flax" },
    { progetto: "adria-were-ready", tema: "verdigris" },
    { progetto: "sottopelle", tema: "jet" },
    { progetto: "arcadia-earth", tema: "apricot" }
  ],
  testi: {
    it: {
      url: "/portfolio/", titolo: "Portfolio", occhiello: "Lavori selezionati",
      titolo_seo: "Portfolio sound design e post-produzione audio | Riccardo Vojvoda",
      titolo_seo_genere: "{genere}: portfolio sound design e audio post | Riccardo Vojvoda",
      descrizione: "Sound design, mix e post-produzione audio per spot, branded content, video corporate, film, documentari e installazioni immersive. Scegli un genere o un ruolo per vedere solo quei lavori.",
      genere: "Genere", ruolo: "Ruolo", tutti: "Tutti", tutte: "Tutti",
      nota: "Sound design e mix in tutti i progetti.",
      conta: "{n} progetti", conta1: "1 progetto", nessuno: "Nessun progetto con questa combinazione.", azzera: "Azzera i filtri",
      video: "video", inEvidenza: "Progetti in evidenza", tuttiI: "Vai al portfolio",
      selezione: "Ho lasciato fuori i lavori simili tra loro o meno rappresentativi.", selezioneLink: "Se ti serve un esempio più vicino al tuo progetto, chiedimelo."
    },
    en: {
      url: "/en/portfolio/", titolo: "Portfolio", occhiello: "Selected work",
      titolo_seo: "Sound design and audio post-production portfolio | Riccardo Vojvoda",
      titolo_seo_genere: "{genere}: sound design and audio post portfolio | Riccardo Vojvoda",
      descrizione: "Sound design, mixing and audio post-production for commercials, branded content, corporate video, film, documentary and immersive installations. Pick a genre or a role to see only that work.",
      genere: "Genre", ruolo: "Role", tutti: "All", tutte: "All",
      nota: "Sound design and mixing on every project.",
      conta: "{n} projects", conta1: "1 project", nessuno: "No project matches this combination.", azzera: "Clear filters",
      video: "videos", inEvidenza: "Featured projects", tuttiI: "Go to the portfolio",
      selezione: "I have left out work that repeats itself or shows less of how I work.", selezioneLink: "If you need an example closer to your project, just ask."
    },
    fr: {
      url: "/fr/portfolio/", titolo: "Portfolio", occhiello: "Projets choisis",
      titolo_seo: "Portfolio sound design et post-production audio | Riccardo Vojvoda",
      titolo_seo_genere: "{genere} : portfolio sound design et post-production audio | Riccardo Vojvoda",
      descrizione: "Sound design, mixage et post-production audio pour la publicité, le branded content, la vidéo d'entreprise, le cinéma, le documentaire et les installations immersives. Choisissez un genre ou un rôle pour ne voir que ces projets.",
      genere: "Genre", ruolo: "Rôle", tutti: "Tous", tutte: "Tous",
      nota: "Sound design et mixage sur tous les projets.",
      conta: "{n} projets", conta1: "1 projet", nessuno: "Aucun projet ne correspond à cette combinaison.", azzera: "Effacer les filtres",
      video: "vidéos", inEvidenza: "Projets à la une", tuttiI: "Voir le portfolio",
      selezione: "J'ai écarté les projets trop proches entre eux ou moins représentatifs.", selezioneLink: "Si vous cherchez un exemple plus proche de votre projet, demandez-le-moi."
    }
  }
};

// Pagine generate (src/portfolio.njk e le versioni en/fr): la prima è "Tutti", poi una per genere
module.exports.pagine = [{ chiave: "" }, ...module.exports.generi];
