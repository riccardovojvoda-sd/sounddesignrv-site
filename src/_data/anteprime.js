// Home: testi delle sezioni di anteprima delle pagine del menu (portfolio, servizi, guide, chi sono, partner), per lingua.
// Le sezioni le disegna src/_includes/parti/home-anteprime.njk. Le traduzioni EN e FR sono di Claude: da rileggere.
module.exports = {
  it: {
    ancora: "progetti",
    portfolio: { etichetta: "Portfolio", titolo: "Progetti in evidenza", intro: "Alcuni lavori scelti tra i tanti fatti dal 2006. Scegli un genere per vederne altri." },
    servizi: { etichetta: "Servizi", titolo: "Cosa faccio", intro: "Dal set al master finale, da remoto o in presenza.", link: "Tutti i servizi",
      voci: [
        { titolo: "Post-produzione audio completa", testo: "Dialogue editing, sound design, foley e mix stereo, 5.1 e 7.1, con consegne conformi agli standard broadcast e streaming." },
        { titolo: "Fonica di presa diretta", testo: "Documentari, interviste, branded content e corporate, in Italia e all'estero. Kit completo, fino a 6 radiomicrofoni." },
        { titolo: "Installazioni e planetari", testo: "Sound design immersivo e mix multicanale per musei, spazi espositivi e fulldome." },
        { titolo: "Voce e voice over", testo: "Speakeraggio, voice over e voci AI, con casting, registrazione e mix. In italiano, inglese e francese." }
      ] },
    guide: { etichetta: "Guide", titolo: "Guide pratiche", intro: "Risposte pratiche per chi produce video e vuole capire come si lavora sul suono.", link: "Tutte le guide" },
    chiSono: { etichetta: "Chi sono", titolo: "Riccardo Vojvoda", testo: "Sound designer, post-producer e fonico dal 2006. Formato al Conservatorio di Trieste, al SAE Institute di Milano e a Parigi. Dal 2021 insegno post-produzione audio a H-Farm College e allo IUAV di Venezia.", link: "Il mio percorso" },
    partner: { etichetta: "Partner", titolo: "Lavoro in squadra", testo: "Con case di produzione, agenzie e studi creativi: con CROMO per il video, con BIAS per la post-produzione audio e la musica.", link: "Partner e lavori fatti insieme" }
  },
  en: {
    ancora: "projects",
    portfolio: { etichetta: "Portfolio", titolo: "Featured projects", intro: "A few pieces chosen from the many I have worked on since 2006. Pick a genre to see more." },
    servizi: { etichetta: "Services", titolo: "What I do", intro: "From the shoot to the final master, remote or on site.", link: "All services",
      voci: [
        { titolo: "Full audio post-production", testo: "Dialogue editing, sound design, foley and stereo, 5.1 and 7.1 mixing, delivered to broadcast and streaming standards." },
        { titolo: "Location sound", testo: "Documentaries, interviews, branded content and corporate, in Italy and abroad. Full kit, up to 6 wireless channels." },
        { titolo: "Installations and planetariums", testo: "Immersive sound design and multichannel mixing for museums, exhibition spaces and fulldome." },
        { titolo: "Voice and voice-over", testo: "Narration, voice-over and AI voices, with casting, recording and mixing. In Italian, English and French." }
      ] },
    guide: { etichetta: "Insights", titolo: "Practical guides", intro: "Practical answers for people who make video and want to understand how sound work is done.", link: "All insights" },
    chiSono: { etichetta: "About", titolo: "Riccardo Vojvoda", testo: "Sound designer, audio post-producer and production sound mixer since 2006. Trained at the Trieste Conservatory, SAE Institute Milan and in Paris. Since 2021 I have taught audio post-production at H-Farm College and IUAV Venice.", link: "My background" },
    partner: { etichetta: "Partners", titolo: "I work in teams", testo: "With production companies, agencies and creative studios: with CROMO for the picture, with BIAS for audio post-production and music.", link: "Partners and work together" }
  },
  fr: {
    ancora: "projets",
    portfolio: { etichetta: "Portfolio", titolo: "Projets à la une", intro: "Quelques projets choisis parmi tous ceux réalisés depuis 2006. Choisissez un genre pour en voir d'autres." },
    servizi: { etichetta: "Services", titolo: "Ce que je fais", intro: "Du tournage au master final, à distance ou sur place.", link: "Tous les services",
      voci: [
        { titolo: "Post-production audio complète", testo: "Montage dialogues, sound design, bruitage et mixage stéréo, 5.1 et 7.1, livrés aux normes broadcast et streaming." },
        { titolo: "Prise de son", testo: "Documentaires, interviews, branded content et films d'entreprise, en Italie et à l'étranger. Kit complet, jusqu'à 6 micros HF." },
        { titolo: "Installations et planétariums", testo: "Sound design immersif et mixage multicanal pour musées, espaces d'exposition et fulldome." },
        { titolo: "Voix et voix off", testo: "Narration, voix off et voix IA, avec casting, enregistrement et mixage. En italien, en anglais et en français." }
      ] },
    guide: { etichetta: "Guides", titolo: "Guides pratiques", intro: "Des réponses pratiques pour celles et ceux qui produisent de la vidéo et veulent comprendre comment on travaille le son.", link: "Tous les guides" },
    chiSono: { etichetta: "À propos", titolo: "Riccardo Vojvoda", testo: "Sound designer, monteur-mixeur son et ingénieur du son de plateau depuis 2006. Formé au Conservatoire de Trieste, au SAE Institute de Milan et à Paris. Depuis 2021, j'enseigne la post-production audio à H-Farm College et à l'IUAV de Venise.", link: "Mon parcours" },
    partner: { etichetta: "Partenaires", titolo: "Je travaille en équipe", testo: "Avec des sociétés de production, des agences et des studios créatifs : avec CROMO pour l'image, avec BIAS pour la post-production audio et la musique.", link: "Partenaires et projets communs" }
  },
  // Nomi in fila nella sezione Partner (stesso ordine della pagina Partner)
  nomiPartner: ["CROMO", "Invrsion", "Method", "PM2", "BIAS", "D&Co", "Studio Creta"]
};
