// Rimandi dentro le schede progetto e le pagine video (dal 21/10/2026): chi arriva da un video deve trovare
// servizi, guide, contatti e altri lavori senza tornare al menu.
// Per genere: la domanda del riquadro contatto e il "profilo" con cui lib/correlati.js sceglie le guide.
// Servizi: le ancore dei quattro riquadri "Cosa faccio" in servizi.md (uguali nelle tre lingue).
module.exports = {
  generi: {
    spot: {
      guide: { argomento: ["consegna-materiali", "musica-diritti"], per_chi: ["agenzia"], categoria: "Brief" },
      it: "Sonorizziamo il tuo spot", en: "Let's give your commercial its sound", fr: "Donnons du son à votre spot"
    },
    branded: {
      guide: { argomento: ["effetti-sonori", "consegna-materiali"], per_chi: ["agenzia", "regista-produzione"], categoria: "Sound design" },
      it: "Sonorizziamo il tuo branded content", en: "Let's give your branded content its sound", fr: "Donnons du son à votre branded content"
    },
    corporate: {
      guide: { argomento: ["musica-diritti", "voce"], per_chi: ["regista-produzione"], categoria: "Musica e diritti" },
      it: "Sonorizziamo il tuo video aziendale", en: "Let's give your corporate video its sound", fr: "Donnons du son à votre vidéo d'entreprise"
    },
    film: {
      guide: { argomento: ["presa-diretta", "consegna-materiali"], per_chi: ["regista-produzione", "montatore"], categoria: "Presa diretta" },
      it: "Chiudiamo insieme l'audio del tuo film", en: "Let's finish your film's sound together", fr: "Finalisons ensemble le son de votre film"
    }
  },
  servizi: {
    "post-produzione": { it: "Post-produzione audio completa", en: "Full audio post-production", fr: "Post-production audio complète" },
    "presa-diretta": { it: "Fonica di presa diretta", en: "Location sound recording", fr: "Prise de son directe" },
    "installazioni": { it: "Sound design per installazioni e planetari", en: "Sound design for installations and planetariums", fr: "Sound design pour installations et planétariums" },
    "voce": { it: "Voce: speaker, voice over, voci AI", en: "Voice: voice-over, casting, AI voices", fr: "Voix : voix off, casting, voix IA" },
    // quinto riquadro di Servizi, approvato da Riccardo il 13/11/2026
    "musica": { it: "Musica: composizione e ricerca musicale", en: "Music: composition and music supervision", fr: "Musique : composition et recherche musicale" }
  },
  // ruolo del portfolio -> riquadro di Servizi (la post-produzione c'è sempre)
  ruoloServizio: { "presa-diretta": "presa-diretta", voce: "voce", composizione: "musica", selezione: "musica" },
  // progetti che aggiungono un servizio fuori dai ruoli
  progettoServizio: { "arcadia-earth": "installazioni" }
};
