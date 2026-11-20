// Testi del profilo PDF (pagina /profilo-pdf/<lingua>/, da cui si esporta il PDF con scripts/profilo-pdf.js).
// Italiano approvato da Riccardo il 15/10/2026 nel Google Doc "Profilo PDF 2026 - testi italiani da approvare".
// I link verso il sito hanno l'etichetta UTM nell'indirizzo, mai nel testo visibile.

const utm = (lingua) => `utm_source=profilo-pdf&utm_medium=pdf&utm_campaign=profilo-2026-${lingua}`;

// Loghi per settore: file in assets/img/loghi; "senzaLogo" = nomi scritti per esteso accanto ai loghi
const settori = (nomi) => [
  { nome: nomi[0], loghi: [["maserati.png", "Maserati"], ["alfa-romeo.png", "Alfa Romeo"], ["fiat.png", "Fiat"], ["lancia.png", "Lancia"], ["abarth.png", "Abarth"]], senzaLogo: "Azimut Yachts, Renault Trucks, Adria" },
  { nome: nomi[1], loghi: [["diadora.png", "Diadora"], ["the-north-face.png", "The North Face"], ["cmp.png", "CMP"], ["roxa.webp", "Roxa"]], senzaLogo: "Ballantyne" },
  { nome: nomi[2], loghi: [["alpi-wood.png", "Alpi Wood"], ["valcucine.png", "Valcucine"], ["arrital.png", "Arrital"], ["copatlife.png", "Copat Life"], ["dvo-sitland.webp", "DVO Sitland"], ["oasis.png", "Oasis"], ["mediaprofili.png", "Mediaprofili"], ["federlegno.png", "Federlegno"]], senzaLogo: "Calligaris, Connubia" },
  { nome: nomi[3], loghi: [["lainox.webp", "Lainox"], ["fitt-industrial.webp", "FITT Industrial"], ["savio.png", "Savio"], ["goriziane.png", "Goriziane"], ["beninca.png", "Benincà"], ["biasi.png", "Biasi"], ["gefran.png", "Gefran"], ["everli.png", "Everli"], ["carinzia.png", "Carinzia"]], senzaLogo: "" },
  { nome: nomi[4], loghi: [["hausbrandt.png", "Hausbrandt"], ["ponte.webp", "Ponte 1948"], ["pitars.webp", "Pitars"], ["lamarca.png", "LaMarca"], ["sacchetto.webp", "Sacchetto Vini"], ["farnese.png", "Farnese"], ["weldan.png", "Weldan"]], senzaLogo: "Fantini Wines" },
  { nome: nomi[5], loghi: [["arcadia-earth.png", "Arcadia Earth"], ["hfarm.png", "H-Farm"], ["iuav.png", "IUAV"]], senzaLogo: "SOS Chirurgia (RealTime)" },
];

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
