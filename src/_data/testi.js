// Testi d'interfaccia per lingua. I contenuti delle pagine stanno nei rispettivi file (src/ per l'italiano, src/en/ per l'inglese).
module.exports = {
  it: {
    codice: "it", locale: "it_IT", nome: "Italiano", sigla: "IT",
    url: { home: "/", portfolio: "/#progetti", servizi: "/servizi/", chiSono: "/chi-sono/", faq: "/faq/", contatti: "/contatti/" },
    menu: { portfolio: "Portfolio", servizi: "Servizi", chiSono: "Chi sono", contatti: "Contatti", faq: "FAQ", principale: "Principale", pagine: "Pagine", profili: "Profili esterni", lingua: "Lingua" },
    salta: "Vai al contenuto",
    marchioRuolo: "Sound Design | Audio Post",
    video: { ascolta: "Ascolta", anteprima: "Anteprima video", suYoutube: "Ascolta su YouTube", durata: "Durata" },
    scheda: { portfolio: "Portfolio", categoria: "Categoria", ruolo: "Ruolo", episodi: "Gli episodi", precedente: "Precedente", successivo: "Successivo", tutti: "Tutti i progetti", altri: "Altri progetti", serie: "video in questa serie", apri: "Scheda del progetto" },
    contatto: {
      titolo: "Scrivimi se il tuo progetto ha bisogno di cura sonora.",
      testo: "Mi chiamo Riccardo Vojvoda, sound designer, post-producer e fonico per film, documentari, branded content, animazione, videogiochi, radio e installazioni immersive. Sono disponibile da remoto o in presenza, in italiano, inglese e francese.",
      nota: "Rispondo di norma entro 24-48 ore. Hai dubbi sul processo o sui materiali da consegnare?",
      faq: "Consulta le FAQ",
      pdf: "Scarica il profilo in PDF"
    },
    pie: { piva: "P.IVA" }
  },
  en: {
    codice: "en", locale: "en_GB", nome: "English", sigla: "EN",
    url: { home: "/en/", portfolio: "/en/#projects", servizi: "/en/services/", chiSono: "/en/about/", faq: "/en/faq/", contatti: "/en/contact/" },
    menu: { portfolio: "Portfolio", servizi: "Services", chiSono: "About", contatti: "Contact", faq: "FAQ", principale: "Main", pagine: "Pages", profili: "External profiles", lingua: "Language" },
    salta: "Skip to content",
    marchioRuolo: "Sound Design | Audio Post",
    video: { ascolta: "Listen", anteprima: "Video preview", suYoutube: "Listen on YouTube", durata: "Duration" },
    scheda: { portfolio: "Portfolio", categoria: "Category", ruolo: "Role", episodi: "The episodes", precedente: "Previous", successivo: "Next", tutti: "All projects", altri: "More projects", serie: "videos in this series", apri: "Project page" },
    contatto: {
      titolo: "Get in touch if your project needs careful sound.",
      testo: "I'm Riccardo Vojvoda, sound designer, audio post-producer and production sound mixer for film, documentary, branded content, animation, video games, radio and immersive installations. Available remotely or on site, in English, French and Italian.",
      nota: "I usually reply within 24-48 hours. Questions about the process or the materials to deliver?",
      faq: "Read the FAQ",
      pdf: "Download the profile (PDF)"
    },
    pie: { piva: "VAT" }
  }
};
