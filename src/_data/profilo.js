// Testi del profilo PDF (pagina /profilo-pdf/<lingua>/, da cui si esporta il PDF con scripts/profilo-pdf.js).
// Italiano approvato da Riccardo il 15/10/2026 nel Google Doc "Profilo PDF 2026 - testi italiani da approvare".
// I link verso il sito hanno l'etichetta UTM nell'indirizzo, mai nel testo visibile.

const utm = (lingua) => `utm_source=profilo-pdf&utm_medium=pdf&utm_campaign=profilo-2026-${lingua}`;

// Loghi per settore: file in assets/img/loghi; "senzaLogo" = nomi scritti per esteso accanto ai loghi
// Nella pagina Clienti del PDF si stampano solo i nomi (22/11, Riccardo: "o solo loghi o solo testo", loghi già a pagina 2)
const conNomi = (s) => ({ ...s, nomi: [...s.loghi.map((l) => l[1]), ...s.senzaLogo.split(", ")].filter(Boolean) });
const settori = (nomi) => [
  { nome: nomi[0], loghi: [["maserati.png", "Maserati"], ["alfa-romeo.png", "Alfa Romeo"], ["fiat.png", "Fiat"], ["lancia.png", "Lancia"], ["abarth.png", "Abarth"]], senzaLogo: "Azimut Yachts, Renault Trucks, Adria" },
  { nome: nomi[1], loghi: [["diadora.png", "Diadora"], ["the-north-face.png", "The North Face"], ["cmp.png", "CMP"], ["roxa.webp", "Roxa"]], senzaLogo: "Ballantyne" },
  { nome: nomi[2], loghi: [["alpi-wood.png", "Alpi Wood"], ["valcucine.png", "Valcucine"], ["arrital.png", "Arrital"], ["copatlife.png", "Copat Life"], ["dvo-sitland.webp", "DVO Sitland"], ["oasis.png", "Oasis"], ["mediaprofili.png", "Mediaprofili"], ["federlegno.png", "Federlegno"]], senzaLogo: "Calligaris, Connubia" },
  { nome: nomi[3], loghi: [["lainox.webp", "Lainox"], ["fitt-industrial.webp", "FITT Industrial"], ["savio.png", "Savio"], ["goriziane.png", "Goriziane"], ["beninca.png", "Benincà"], ["biasi.png", "Biasi"], ["gefran.png", "Gefran"], ["everli.png", "Everli"], ["carinzia.png", "Carinzia"]], senzaLogo: "" },
  { nome: nomi[4], loghi: [["hausbrandt.png", "Hausbrandt"], ["ponte.webp", "Ponte 1948"], ["pitars.webp", "Pitars"], ["lamarca.png", "LaMarca"], ["sacchetto.webp", "Sacchetto Vini"], ["farnese.png", "Farnese"], ["weldan.png", "Weldan"]], senzaLogo: "Fantini Wines" },
  { nome: nomi[5], loghi: [["arcadia-earth.png", "Arcadia Earth"], ["hfarm.png", "H-Farm College"], ["iuav.png", "Università Iuav di Venezia"]], senzaLogo: "SOS Chirurgia (Real Time)" },
].map(conNomi);

module.exports = {
  it: {
    lang: "it",
    utm: utm("it"),
    titoloPagina: "Riccardo Vojvoda - Sound Designer | Audio Post-Producer - Profilo",
    // titoli delle pagine: [parte normale, parola col tratto di evidenziatore]
    pagine: [["Chi ", "sono"], ["", "Servizi"], ["Competenze e ", "setup"], ["Progetti ", "selezionati"], ["In ", "squadra"], ["", "Clienti"], ["", "Contatti"]],
    copertina: {
      ascolta: "Ascolta",
      brand: "Brand e produzioni",
      vediTutti: "Vedi tutti",
      ruoli: ["Sound Designer", "Audio Post-Producer"],
      frase: "Sound design e post-produzione audio per cinema, documentari, branded content e installazioni immersive.",
      showreel: "Guarda lo showreel",
    },
    chiSono: {
      occhiello: "Profilo",
      h1: "Chi sono",
      titolo: "Sound designer, post-producer e fonico dal 2006.",
      paragrafi: [
        "Diplomato in Musica e Nuove Tecnologie al Conservatorio di Trieste, ho iniziato a occuparmi di fonica e post-produzione nel 2006, dopo anni come produttore e mixer musicale. Nel 2010 ho proseguito la formazione al SAE Institute di Milano e poi a Parigi, dove ho lavorato per quattro anni nella post-produzione di cortometraggi e documentari, maturando la cura per il dettaglio sonoro tipica della scuola del cinema francese.",
        "Rientrato in Italia nel 2015, lavoro nella fonica e nella post-produzione audio per il settore corporate e pubblicitario, con CROMO e brand come Maserati, Diadora, Stellantis, Everli e The North Face. Ho curato l'audio di documentari, cortometraggi e di un lungometraggio thriller in 5.1, e il suono di contenuti immersivi in 5.1 e 7.1 per planetari e installazioni surround.",
        "Dal 2021 insegno Post-Produzione Audio a H-Farm College e allo IUAV di Venezia.",
        "Progetto il suono come parte del racconto visivo, dai dialoghi agli ambienti agli effetti, per coerenza, intelligibilità ed equilibrio emotivo. Mi integro nei team di produzione oppure seguo da solo l'intero flusso audio, dal set al mix finale.",
      ],
      inBreveTitolo: "In breve",
      inBreve: [
        ["20 anni di esperienza", "su film, documentari, corporate e branded content"],
        ["Stereo, 5.1 e 7.1", "consegne conformi agli standard broadcast e streaming"],
        ["Da remoto o in presenza", "in Italia e all'estero"],
        ["Italiano, inglese e francese", "comprendo lo spagnolo"],
      ],
    },
    servizi: {
      occhiello: "Servizi",
      h1: "Servizi",
      intro: "Un flusso di lavoro completo e scalabile per film, documentari, branded content, animazione, videogiochi, spot radio, podcast e installazioni immersive.",
      // [titolo, foto (in assets/img), testo, punto della foto da tenere al centro]
      voci: [
        ["Post-produzione audio completa", "profilo/schermo-plugin-mix-offlmts.jpg", "Dialogue editing e pulizia del parlato, sound design, foley, sound FX editing, ADR. Mix stereo, 5.1 e 7.1 con consegne conformi agli standard internazionali di broadcast e streaming. Dal girato di set al master finale."],
        ["Fonica di presa diretta", "profilo/riccardo-boom-sul-set.jpg", "Registrazione sul campo per documentari, interviste, reportage, branded content, spot e corporate, in Italia e all'estero. Kit completo, fino a 6 canali wireless simultanei.", "30% 50%"],
        ["Sound design per installazioni e planetari", "progetti/arcadia-earth.jpg", "Paesaggi sonori multistrato per installazioni museali, spazi espositivi e planetari, con mix multicanale adattato allo spazio. Dalla ricerca timbrica al delivery tecnico."],
        ["Voce: speakeraggio, voice over, voci AI", "profilo/microfono-voce-offlmts.jpg", "Voce provvisoria sul testo approvato, casting tra 3-4 profili, registrazione, montaggio e mix della voce definitiva. Voci sintetiche dove ha senso: corporate, e-learning, istituzionale.", "80% 60%"],
      ],
    },
    competenze: {
      gruppi: [
        ["Post-produzione audio", [
          "Dialogue editing, sound FX editing, foley, sound design e mix stereo / 5.1 / 7.1",
          "Supervisione audio: gestione completa del flusso di post, dal set al mix finale",
          "Editing e mix voci: voice over, doppiaggi, podcast",
          "Restauro e pulizia audio: denoise, ricostruzione sonora, ottimizzazione del parlato",
        ]],
        ["Sound design e mix", [
          "Paesaggi sonori narrativi per film, serie, documentari, animazione, videogiochi e installazioni",
          "Mix surround con attenzione a immersione e spazialità",
          "Palette sonora costruita per ogni progetto",
        ]],
        ["AI e innovazione audio", [
          "Voice design e prompting di voci sintetiche",
          "Strumenti AI per restauro, editing, upmix e downmix, integrati nel flusso tradizionale",
          "Gestione dei processi: automazioni e strumenti su misura, costruiti con l'AI, che organizzano e ottimizzano il lavoro tecnico e quello organizzativo, dalle revisioni con il cliente alle consegne",
        ]],
      ],
      setupTitolo: "Setup",
      setup: "Pro Tools e DaVinci Resolve, iZotope RX, Soundly, SoundFlow. Monitoring stereo, 5.1 e 7.1 calibrato con SoundID Reference Multichannel.",
      kitTitolo: "Kit di presa diretta",
      kit: "Sound Devices MixPre-6 II, Sennheiser MKH 416 e Rode NTG3 (boom), 3 Sennheiser EW100 G3 (6 canali wireless), DPA 4060 e Rode Lavalier, Zoom F2 BT, asta Gitzo 3,5 m, Rycote Blimp.",
    },
    progetti: {
      occhiello: "Portfolio",
      voci: [
        { slug: "maserati-mc20", img: "progetti/maserati-mc20.jpg", titolo: "Maserati MC20. How It's Made", categoria: "Branded content", testo: "Sound design, composizione musicale, mix web. Il suono come narrazione." },
        { slug: "jw-anderson-diadora-equipe", img: "progetti/jw-anderson-diadora-equipe.png", titolo: "Diadora x JW Anderson, Equipe", categoria: "Fashion film", testo: "Sound design e foley costruiti da zero su immagini mute, selezione musicale d'archivio, mix web." },
        { slug: "alfa-romeo-quadrifoglio", img: "progetti/alfa-romeo-quadrifoglio.jpg", titolo: "Alfa Romeo, Il quadrifoglio", categoria: "Branded content", testo: "Composizione musicale, sound design, mix web: dalle corse del passato al rombo contemporaneo." },
        { slug: "arcadia-earth", img: "progetti/arcadia-earth.jpg", titolo: "Arcadia Earth, A Vision For Tomorrow", categoria: "Installazione immersiva / Planetario", testo: "Sound design 5.1, mix 5.1 e 7.1, voice over AI, selezione musicale. Distribuito nei planetari di USA e Cina." },
        { slug: "sottopelle", img: "progetti/sottopelle.png", titolo: "Sottopelle, Ogni cosa viene alla luce", categoria: "Lungometraggio / Fiction", testo: "Presa diretta, dialog editing, sound editing e design, ADR, foley: dal set alla post-produzione." },
        { slug: "the-missing-head", img: "progetti/the-missing-head.jpg", titolo: "The Missing Head", categoria: "Documentario", testo: "Dialog editing, sound design e mix stereo del trailer." },
        { slug: "weldan", img: "progetti/weldan.jpg", titolo: "Weldan, Vinaioli del Friuli", categoria: "Video corporate", testo: "Presa diretta, dialog editing, sound design stereo, mix web. Le voci della famiglia come filo conduttore." },
        { slug: "alpi-wood", img: "progetti/alpi-wood-4.jpg", titolo: "Alpi Wood, Parzialmente soleggiato", categoria: "Spot", testo: "Sound design astratto e mix stereo, costruito in crescendo, potente quanto la materia che descrive." },
      ],
    },
    squadra: {
      occhiello: "Partner",
      intro: "Per i progetti più grandi lavoro dentro squadre più ampie, con case di produzione e colleghi del suono.",
      voci: [
        ["CROMO", "casa di produzione video", "Guidata da mio fratello Edoardo Vojvoda: racconto cinematografico per branded content e documentari. Lui il video, io il suono, dalla presa diretta al mix. Insieme dal 2015: Maserati MC20, JW Anderson x Diadora, Diadora Run Valley, The Missing Head, FITT Industrial, Weldan, Pitars."],
        ["Method", "documentari e film", "Il suono dei loro documentari."],
        ["BIAS", "sound design e post-produzione audio", "Il documentario Tintoretto: The Artist Who Killed Painting e il lungometraggio Sottopelle."],
      ],
    },
    clienti: {
      settori: settori(["Automotive e nautica", "Sport, outdoor e moda", "Arredo, design e architettura", "Industria e retail", "Food e beverage", "Immersivo, formazione e media"]),
      altri: "e altri.",
    },
    contatti: {
      titolo: "Parliamo del tuo progetto.",
      vetrina: "Showreel, progetti completi e guide",
      showreel: "Guarda lo showreel 2026",
      qr: "Inquadra per aprire il sito",
    },
  },
};



// Inglese e francese della v2 (25/11/2026): stesso contenuto dell'italiano, con le formule già usate nelle pagine EN e FR del sito.
// Da far vedere a Riccardo prima di metterli online.
const it = module.exports.it;
const progettiIn = (testi) => it.progetti.voci.map((v, i) => ({ ...v, ...testi[i] }));
const serviziIn = (testi) => it.servizi.voci.map((v, i) => [testi[i][0], v[1], testi[i][1], v[3]]);

module.exports.en = {
  lang: "en",
  utm: utm("en"),
  home: "/en/", progettiUrl: "/en/projects/",
  titoloPagina: "Riccardo Vojvoda - Sound Designer | Audio Post-Producer - Profile",
  pagine: [["", "About"], ["", "Services"], ["Skills and ", "setup"], ["Selected ", "projects"], ["As a ", "team"], ["", "Clients"], ["", "Contact"]],
  copertina: {
    ascolta: "Listen",
    brand: "Brands and productions",
    vediTutti: "See all",
    ruoli: ["Sound Designer", "Audio Post-Producer"],
    frase: "Sound design and audio post-production for film, documentary, branded content and immersive installations.",
    showreel: "Watch the showreel",
  },
  chiSono: {
    occhiello: "Profile",
    h1: "About",
    titolo: "Sound designer, audio post-producer and production sound mixer since\u00a02006.",
    paragrafi: [
      "A graduate in Music and New Technologies from the Trieste Conservatory, I started working in production sound and post-production in 2006, after years as a music producer and mixer. In 2010 I continued my training at SAE Institute in Milan and then in Paris, where I spent four years in post-production for short films and documentaries, absorbing the attention to sonic detail typical of the French film school.",
      "Back in Italy since 2015, I work in production sound and audio post-production for the corporate and advertising sector, with CROMO and brands such as Maserati, Diadora, Stellantis, Everli and The North Face. I have handled the sound of documentaries, short films and a feature-length thriller in 5.1, and of immersive content in 5.1 and 7.1 for planetariums and surround installations.",
      "Since 2021 I have taught Audio Post-Production at H-Farm College and IUAV Venice.",
      "I design sound as part of the visual story, from dialogue to ambiences to effects, for coherence, intelligibility and emotional balance. I join production teams or run the whole audio workflow on my own, from set to final mix.",
    ],
    inBreveTitolo: "In short",
    inBreve: [
      ["20 years of experience", "on film, documentary, corporate and branded content"],
      ["Stereo, 5.1 and 7.1", "deliveries to broadcast and streaming standards"],
      ["Remote or on site", "in Italy and abroad"],
      ["Italian, English and French", "I understand Spanish"],
    ],
  },
  servizi: {
    occhiello: "Services",
    h1: "Services",
    intro: "A complete, scalable workflow for film, documentary, branded content, animation, video games, radio spots, podcasts and immersive installations.",
    voci: serviziIn([
      ["Full audio post-production", "Dialogue editing and clean-up, sound design, foley, sound FX editing, ADR. Stereo, 5.1 and 7.1 mixes delivered to international broadcast and streaming standards. From the set recordings to the final master."],
      ["Location sound", "Field recording for documentaries, interviews, reportage, branded content, commercials and corporate video, in Italy and abroad. Full kit, up to 6 simultaneous wireless channels."],
      ["Sound design for installations and planetariums", "Multi-layered soundscapes for museum installations, exhibition spaces and planetariums, with a multichannel mix adapted to the space. From timbral research to technical delivery."],
      ["Voice: narration, voice over, AI voices", "A scratch voice on the approved script, casting among 3-4 profiles, recording, editing and mixing of the final voice. Synthetic voices where it makes sense: corporate, e-learning, institutional."],
    ]),
  },
  competenze: {
    gruppi: [
      ["Audio post-production", [
        "Dialogue editing, sound FX editing, foley, sound design and stereo / 5.1 / 7.1 mixing",
        "Audio supervision: full control of the post workflow, from set to final mix",
        "Voice editing and mixing: voice over, dubbing, podcasts",
        "Audio restoration and clean-up: denoise, sound reconstruction, speech optimisation",
      ]],
      ["Sound design and mixing", [
        "Narrative soundscapes for film, series, documentary, animation, video games and installations",
        "Surround mixing with a focus on immersion and space",
        "A sound palette built for each project",
      ]],
      ["AI and audio innovation", [
        "Voice design and prompting of synthetic voices",
        "AI tools for restoration, editing, upmixing and downmixing, built into the traditional workflow",
        "Process management: custom automations and tools, built with AI, that organise and optimise both the technical and the organisational work, from client revisions to deliveries",
      ]],
    ],
    setupTitolo: "Setup",
    setup: "Pro Tools and DaVinci Resolve, iZotope RX, Soundly, SoundFlow. Stereo, 5.1 and 7.1 monitoring calibrated with SoundID Reference Multichannel.",
    kitTitolo: "Location sound kit",
    kit: "Sound Devices MixPre-6 II, Sennheiser MKH 416 and Rode NTG3 (boom), 3 Sennheiser EW100 G3 (6 wireless channels), DPA 4060 and Rode Lavalier, Zoom F2 BT, Gitzo 3.5 m boom pole, Rycote Blimp.",
  },
  progetti: {
    occhiello: "Portfolio",
    voci: progettiIn([
      { categoria: "Branded content", testo: "Sound design, music composition, web mix. Sound as storytelling." },
      { categoria: "Fashion film", testo: "Sound design and foley built from scratch on silent footage, archive music selection, web mix." },
      { titolo: "Alfa Romeo, Il quadrifoglio", categoria: "Branded content", testo: "Music composition, sound design, web mix: from the races of the past to the roar of today." },
      { categoria: "Immersive installation / Planetarium", testo: "5.1 sound design, 5.1 and 7.1 mix, AI voice over, music selection. Screened in planetariums in the USA and China." },
      { categoria: "Feature film / Fiction", testo: "Production sound, dialogue editing, sound editing and design, ADR, foley: from set to post-production." },
      { categoria: "Documentary", testo: "Dialogue editing, sound design and stereo mix of the trailer." },
      { categoria: "Corporate video", testo: "Location sound, dialogue editing, stereo sound design, web mix. The family's voices as the common thread." },
      { categoria: "Commercial", testo: "Abstract sound design and stereo mix, built as a crescendo, as powerful as the material it describes." },
    ]),
  },
  clienti: {
    settori: settori(["Automotive and yachting", "Sport, outdoor and fashion", "Furniture, design and architecture", "Industry and retail", "Food and beverage", "Immersive, education and media"]),
    altri: "and others.",
  },
  contatti: {
    titolo: "Let's talk about<br>your project.",
    vetrina: "Showreel, full projects and insights",
    showreel: "Watch the 2026 showreel",
    qr: "Scan to open the website",
  },
};

module.exports.fr = {
  lang: "fr",
  utm: utm("fr"),
  home: "/fr/", progettiUrl: "/fr/projets/",
  titoloPagina: "Riccardo Vojvoda - Sound Designer | Post-producteur audio - Profil",
  pagine: [["À ", "propos"], ["", "Services"], ["Compétences et ", "setup"], ["Projets ", "sélectionnés"], ["En ", "équipe"], ["", "Clients"], ["", "Contact"]],
  copertina: {
    ascolta: "Écouter",
    brand: "Marques et productions",
    vediTutti: "Voir tout",
    ruoli: ["Sound Designer", "Post-producteur audio"],
    frase: "Sound design et post-production audio pour le cinéma, le documentaire, le branded content et les installations immersives.",
    showreel: "Voir le showreel",
  },
  chiSono: {
    occhiello: "Profil",
    h1: "À propos",
    titolo: "Sound designer, monteur-mixeur son et ingénieur du son de plateau depuis\u00a02006.",
    paragrafi: [
      "Diplômé en Musique et Nouvelles Technologies du Conservatoire de Trieste, j'ai commencé à travailler dans la prise de son et la post-production en 2006, après des années comme producteur et mixeur de musique. En 2010, j'ai poursuivi ma formation au SAE Institute de Milan puis à Paris, où j'ai passé quatre ans dans la post-production de courts métrages et de documentaires, en m'imprégnant du soin du détail sonore propre à l'école de cinéma française.",
      "De retour en Italie en 2015, je travaille dans la prise de son et la post-production audio pour le secteur corporate et publicitaire, avec CROMO et des marques comme Maserati, Diadora, Stellantis, Everli et The North Face. J'ai pris en charge le son de documentaires, de courts métrages et d'un long métrage thriller en 5.1, ainsi que de contenus immersifs en 5.1 et 7.1 pour planétariums et installations surround.",
      "Depuis 2021, j'enseigne la post-production audio à H-Farm College et à l'IUAV de Venise.",
      "Je conçois le son comme une partie du récit visuel, des dialogues aux ambiances et aux effets, pour la cohérence, l'intelligibilité et l'équilibre émotionnel. Je m'intègre aux équipes de production ou je gère seul l'ensemble du workflow audio, du plateau au mixage final.",
    ],
    inBreveTitolo: "En bref",
    inBreve: [
      ["20 ans d'expérience", "sur des films, documentaires, corporate et branded content"],
      ["Stéréo, 5.1 et 7.1", "livraisons conformes aux normes de diffusion et de streaming"],
      ["À distance ou sur place", "en Italie et à l'étranger"],
      ["Italien, anglais et français", "je comprends l'espagnol"],
    ],
  },
  servizi: {
    occhiello: "Services",
    h1: "Services",
    intro: "Un workflow complet et modulable pour le cinéma, le documentaire, le branded content, l'animation, le jeu vidéo, les spots radio, les podcasts et les installations immersives.",
    voci: serviziIn([
      ["Post-production audio complète", "Montage et nettoyage des dialogues, sound design, bruitages, montage des effets, ADR. Mixages stéréo, 5.1 et 7.1 livrés aux normes internationales de la diffusion et du streaming. Des enregistrements de plateau au master final."],
      ["Prise de son", "Prise de son en extérieur pour documentaires, interviews, reportages, branded content, publicités et films corporate, en Italie et à l'étranger. Équipement complet, jusqu'à 6 canaux HF simultanés."],
      ["Sound design pour installations et planétariums", "Paysages sonores à plusieurs couches pour installations muséales, espaces d'exposition et planétariums, avec un mixage multicanal adapté au lieu. De la recherche de timbres à la livraison technique."],
      ["Voix : narration, voix off, voix IA", "Voix témoin sur le texte approuvé, casting parmi 3 à 4 profils, enregistrement, montage et mixage de la voix définitive. Voix de synthèse quand cela a du sens : corporate, e\u2011learning, institutionnel."],
    ]),
  },
  competenze: {
    gruppi: [
      ["Post-production audio", [
        "Montage des dialogues et des effets, bruitages, sound design, mixage stéréo et surround",
        "Supervision audio : maîtrise du workflow, du plateau au mixage final",
        "Montage et mixage de voix : voix off, doublage, podcasts",
        "Restauration audio : débruitage, reconstruction sonore, clarté de la parole",
      ]],
      ["Sound design et mixage", [
        "Paysages sonores narratifs pour le cinéma, les séries, le documentaire, l'animation, le jeu vidéo et les installations",
        "Mixage surround axé sur l'immersion et l'espace",
        "Une palette sonore construite pour chaque projet",
      ]],
      ["IA et innovation audio", [
        "Voice design et prompting de voix de synthèse",
        "Outils d'IA pour la restauration, le montage, l'upmix et le downmix, intégrés au workflow traditionnel",
        "Gestion des processus : automatisations et outils sur mesure, construits avec l'IA, pour le travail technique et l'organisation, des révisions client aux livraisons",
      ]],
    ],
    setupTitolo: "Setup",
    setup: "Pro Tools et DaVinci Resolve, iZotope RX, Soundly, SoundFlow. Écoute stéréo, 5.1 et 7.1 calibrée avec SoundID Reference Multichannel.",
    kitTitolo: "Équipement de prise de son",
    kit: "Sound Devices MixPre-6 II, Sennheiser MKH 416 et Rode NTG3 (perche), 3 Sennheiser EW100 G3 (6 canaux HF), DPA 4060 et Rode Lavalier, Zoom F2 BT, perche Gitzo 3,5 m, Rycote Blimp.",
  },
  progetti: {
    occhiello: "Portfolio",
    voci: progettiIn([
      { categoria: "Branded content", testo: "Sound design, composition musicale, mixage web. Le son comme récit." },
      { categoria: "Film de mode", testo: "Sound design et bruitages créés de zéro sur des images muettes, sélection musicale d'archives, mixage web." },
      { categoria: "Branded content", testo: "Composition musicale, sound design, mixage web : des courses d'autrefois au rugissement d'aujourd'hui." },
      { categoria: "Installation immersive / Planétarium", testo: "Sound design 5.1, mixage 5.1 et 7.1, voix off IA, sélection musicale. Diffusé dans des planétariums aux États-Unis et en Chine." },
      { categoria: "Long métrage / Fiction", testo: "Prise de son, montage des dialogues, montage son et sound design, ADR, bruitages : du plateau à la post-production." },
      { categoria: "Documentaire", testo: "Montage des dialogues, sound design et mixage stéréo de la bande-annonce." },
      { categoria: "Film corporate", testo: "Prise de son, montage des dialogues, sound design stéréo, mixage web. Les voix de la famille comme fil conducteur." },
      { categoria: "Spot", testo: "Sound design abstrait et mixage stéréo, construits en crescendo, aussi puissants que la matière qu'ils décrivent." },
    ]),
  },
  clienti: {
    settori: settori(["Automobile et nautisme", "Sport, outdoor et mode", "Mobilier, design et architecture", "Industrie et retail", "Food et boissons", "Immersif, formation et médias"]),
    altri: "et d'autres.",
  },
  contatti: {
    titolo: "Parlons de votre projet.",
    vetrina: "Showreel, projets complets et guides\u00a0",
    showreel: "Voir le showreel 2026",
    qr: "Scannez pour ouvrir le site",
  },
};

// v3 Parini (24/11/2026): versione semplificata solo per Katia Mercuri e Sara Agostoni (Parini Associati, Milano),
// non va sul sito. Stessa grafica della v2: copertina, Chi sono, Servizi per voi, Interviste ed eventi, Lavori nei
// vostri settori, Contatti. Si esporta con `node scripts/profilo-pdf.js it-parini <file.pdf>`.
module.exports["it-parini"] = {
  ...module.exports.it,
  utm: "utm_source=profilo-pdf&utm_medium=pdf&utm_campaign=profilo-parini",
  versione: "Profilo v3 Parini · 11/2026",
  parini: {
    servizi: {
      occhiello: "Servizi per voi",
      h1: "Cosa posso fare per voi",
      intro: "Il suono di video, interviste ed eventi, dalla registrazione alla consegna.",
      voci: [
        ["Interviste", "profilo/riccardo-boom-sul-set.jpg", "Registrazione sul posto, con radiomicrofoni e microfono a boom, e montaggio audio: pulizia del parlato, mix.", "30% 50%"],
        ["Musica", "profilo/riccardo-al-banco-di-mix-offlmts.jpg", "Ricerca e scelta della musica, montata sulla durata del video, sfruttando gli stem dove possibile. Composizione ad hoc per progetti ambiziosi."],
        ["Voice over", "profilo/microfono-voce-offlmts.jpg", "Casting di voci professionali o generate con l'AI, in italiano, inglese, francese, spagnolo, tedesco e altre lingue. Regia, montaggio e mix."],
        ["Sound design e mix", "profilo/schermo-plugin-mix-offlmts.jpg", "Sound design, foley ed effetti, dialoghi e ADR, spot radio e podcast, audio per installazioni. Mix stereo, 5.1 e 7.1 alla loudness giusta per web, social, TV, cinema ed eventi."],
      ],
    },
    interviste: {
      occhiello: "Esempi",
      h1: "Interviste ed eventi",
      voci: [
        { titolo: "FCA Heritage: Piero Pelù e Miki Biasion", img: "profilo/parini/pelu.jpg",
          testo: "Piero Pelù con la sua Giulietta Sprint, Miki Biasion con la sua Lancia Fulvia Safari. Interviste registrate sul posto, musica originale, montaggio audio e mix.",
          link: [["Piero Pelù", "https://www.youtube.com/watch?v=kBk28_yrfdo"], ["Miki Biasion", "https://www.youtube.com/watch?v=M2l5S1jOnOQ"]] },
        { titolo: "CMP Real People (con PM2)", img: "profilo/parini/cmp-ragonese.jpg",
          testo: "Una serie di ritratti di persone vere nei loro luoghi: Biagio Ragonese e Fausto Menardi, falconiere a Cortina d'Ampezzo. Presa diretta delle interviste, montaggio audio e mix.",
          link: [["Biagio Ragonese", "https://www.youtube.com/watch?v=hgDpHkFy9Vw"], ["Fausto Menardi", "https://www.youtube.com/watch?v=6m3FBNpND20"]] },
        { titolo: "Hausbrandt a HostMilano 2021", img: "profilo/parini/hausbrandt-borghese.jpg",
          testo: "Lo chef Alessandro Borghese cucina con il caffè Hausbrandt in fiera. Post-produzione audio.",
          link: [["Guarda il video", "https://www.youtube.com/watch?v=wH4SOw9Yuec"]] },
        { titolo: "Copat Life, Hangar", img: "profilo/parini/copat-hangar.jpg",
          testo: "Il video che presenta Hangar, lo spazio esperienziale di Copat Life. Musica originale e voci registrate.",
          link: [["Guarda il video", "https://www.youtube.com/watch?v=GmzCQPiG7xE"]] },
      ],
    },
    lavori: {
      occhiello: "Esempi",
      h1: "Lavori nei vostri settori",
      voci: [
        // settore: etichetta sopra la card (Riccardo, 24/11)
        { settore: "Arredamento", slug: "connubia", titolo: "CONNUBIA · Tavoli da vivere", img: "progetti/connubia.jpg", testo: "Piatti che arrivano, bicchieri che si sfiorano, il tavolo che si allunga.", categoria: "Reel social · con l'agenzia PM2" },
        { settore: "Wine", slug: "ponte-1948-fast-food-series", titolo: "PONTE 1948 · Fast Food Series", img: "progetti/ponte-1948-burger.jpg", testo: "Crocca, gusta, stappa… sorpresa!", categoria: "Spot" },
        { settore: "Sportswear", slug: "jw-anderson-diadora-equipe", titolo: "JW Anderson x DIADORA · Equipe", img: "progetti/jw-anderson-diadora-equipe.png", testo: "ASMR artigianale: il 1975 torna a correre.", categoria: "Fashion film" },
        { settore: "Wine", slug: "pitars", titolo: "PITARS · Semplicemente straordinario", img: "progetti/pitars.jpg", testo: "Lo scroscio del fiume. Il gorgoglìo di un calice di bianco.", categoria: "Video corporate" },
        { settore: "Luxury knitwear", slug: "ballantyne-raw-diamond", titolo: "BALLANTYNE · Raw Diamond", img: "progetti/ballantyne-raw-diamond.jpg", pos: "8% 50%", testo: "Lana grezza tra le mani, le macchine da maglia che battono, una voce che torna alle origini.", categoria: "Fashion film con voice over" },
      ],
    },
  },
};
