---
titolo: "Come esportare l'AAF per la post-produzione audio da Premiere Pro, DaVinci Resolve, Avid e Final Cut Pro"
titolo_seo: "Come esportare l'AAF per la post-produzione audio da Premiere, Resolve, Avid e Final Cut | Riccardo Vojvoda"
descrizione_seo: "Le impostazioni di esportazione AAF per Pro Tools, programma per programma: audio incorporato, handles, 48 kHz 24 bit, effetti spenti. Premiere Pro, DaVinci Resolve, Avid Media Composer e Final Cut Pro con X2Pro."
date: 2026-09-24
copertina: export-aaf-resolve-render-settings.jpg
copertinaAlt: "Impostazioni di render per l'AAF: preset AVID AAF, handles a 125 frame, tracce audio separate"
copertinaCredito: "Schermata: DaVinci Resolve"
chiave: articolo-s41
categoria: Consegna dei materiali
per_chi: ["montatore", "regista-produzione"]
argomento: ["consegna-materiali"]
tags: ["approfondimenti", "AAF", "handles", "Premiere Pro", "DaVinci Resolve", "Avid Media Composer", "Final Cut Pro", "X2Pro", "Pro Tools", "post-produzione audio", "consegna materiali sound design"]
---
Le impostazioni che contano sono le stesse in tutti i programmi di montaggio: audio incorporato nel file, handles di almeno 5 secondi, 48 kHz a 24 bit, effetti audio non renderizzati. Cambia solo dove stanno le voci nei menu.

## Prima di esportare, in qualsiasi programma

- **Duplicare la sequenza** e lavorare sulla copia: si può togliere il video e riordinare le tracce senza toccare il montaggio.
- **Tracce ordinate**: dialoghi in alto, poi effetti, poi musiche. In Pro Tools arrivano nello stesso ordine.
- **Clip nidificate, multicam e clip unite** (nested, multicam, merged clips): vanno appiattite prima. Nell'AAF una sequenza nidificata diventa un mixdown stereo, non le singole clip.
- **Niente cambi di velocità** sulle clip audio: si perdono o arrivano sbagliati. Se servono, meglio renderizzarli in un file nuovo.
- **Nomi di clip e tracce senza caratteri speciali** (`/ < > & @ ®` e le lettere accentate): sono la causa più frequente di AAF che non si aprono.
- **Timecode di partenza** della sequenza uguale a quello del video di riferimento (per esempio 01:00:00:00).

## Premiere Pro

`File > Export > AAF` (le voci qui sotto sono quelle della versione inglese; in italiano sono tradotte, ma nello stesso ordine).

- **Mixdown Video**: no. Il video di riferimento si esporta a parte.
- **Breakout to Mono**: sì. Ogni canale va su una traccia mono separata e Pro Tools li legge senza conversioni. Serve soprattutto se le clip stereo sono in realtà due microfoni diversi, tipo il boom a sinistra e il radiomicrofono a destra.
- **Enable (rendering) / Render audio clip effects**: **no**. Gli effetti delle clip non si spostano in Pro Tools: se si renderizzano, l'equalizzatore o il riduttore di rumore restano stampati nel file. Se il rendering serve per far sentire l'intenzione, spuntare anche "Include clip copies without effects": arrivano due tracce per clip, una "FX" e una "No FX".
- **Save as legacy AAF**: no.
- **Embed Audio**: sì, un file solo. "Separate Audio" va bene solo se si devono conservare i metadati del registratore di presa diretta (workflow field recorder): in quel caso spuntare anche "Preserve media directory name".
- **Format**: Broadcast Wave.
- **Render**: "Trim Audio Files" con **Handle Frames** a 120 o più (5 secondi a 24 fps; a 25 fps 125). "Copy Complete Audio Files" copia i file interi: pesa di più, ma gli handles ci sono per definizione.
- **Bits per sample**: 24. **Sample rate**: 48 kHz.

Volume delle clip, keyframe di volume e dissolvenze si leggono in Pro Tools. Le tracce 5.1 e adattive è meglio convertirle in tracce standard prima.

## DaVinci Resolve

L'AAF per Pro Tools si esporta dalla pagina **Deliver**, con il preset **Pro Tools** tra i preset di render in alto. `File > Export > AAF, XML` produce un AAF generico che in Pro Tools apre male.

- **Video**: "Export Video" spento, se il video di riferimento si esporta a parte. Il formato del pannello video decide comunque il tipo di file audio: QuickTime = Broadcast Wave, MXF OP-Atom = MXF.
- **Audio > Codec**: **Embedded in AAF** per un file unico. "Linear PCM" produce un AAF con i file audio in una cartella a parte.
- **Render one track per channel**: lasciare spuntato, file mono.
- **Add X frame handles**: spuntare e mettere 120 o più fotogrammi (a 25 fps: 125 = 5 secondi).
- **48 kHz, 24 bit** nel pannello audio.
- **Effetti Fairlight** (EQ, compressori, FairlightFX, Elastic Wave): non escono e non vengono stampati. Se un effetto deve arrivare, va renderizzato nella clip prima ("bounce" o render in place).
- Poi "Add to Render Queue" e "Render All".

Due cose specifiche di Resolve: le clip **disattivate escono lo stesso**, e in Pro Tools arrivano attive (meglio cancellarle); e in `Preferences > User > Editing` conviene attivare **"Align audio edits to frame boundaries"**, altrimenti i tagli sub-frame possono spostarsi.

## Avid Media Composer

`File > Output > Export to File`, poi "Options" e "Export As: AAF".

- **Include All Audio Tracks in Sequence**: sì. Le tracce video si possono escludere.
- **Audio Details > Export Method**: **Consolidate Media**, con **Handle Length** a 120 o più fotogrammi. "Link to (Don't Export) Media" produce un AAF senza audio: apre solo su una macchina che vede gli stessi media.
- **Render All Audio Effects** / **Include Rendered Audio Effects**: spenti. Gli effetti di traccia (gli insert) in Pro Tools compaiono come insert e non suonano.
- **Convert Audio Sample Rate to Project / Bit Depth to Project**: 48 kHz e 24 bit. **Convert Audio File Format**: WAVE.
- **Media Destination**: **Embedded in AAF**.
- Le dissolvenze arrivano come dissolvenze in tempo reale (da Pro Tools 12.6 in poi), il volume delle clip anche.

## Final Cut Pro

Final Cut non esporta AAF. La strada standard è **X2Pro Audio Convert** (Mac App Store, Marquis Broadcast):

1. In Final Cut, `File > Export XML` del progetto.
2. In X2Pro, aprire l'XML e nella scheda **Roles** scegliere quali ruoli includere e in che ordine: ogni ruolo diventa un gruppo di tracce (dialoghi, effetti, musica), con "Keep sub-roles separate" attivo. Per questo vale la pena assegnare i ruoli con cura in Final Cut prima di esportare.
3. Impostare gli **handles** (5 secondi) e l'audio **embedded**, poi convertire. Volume, keyframe e dissolvenze passano.

Alternativa gratuita: importare l'XML in DaVinci Resolve e usare il preset Pro Tools della pagina Deliver come sopra. I clip composti (compound clip) vanno scomposti prima dell'export XML in entrambi i casi.

## Da consegnare insieme all'AAF

- Il **video di riferimento** con lo stesso frame rate e lo stesso timecode di partenza (H.264 1080p o ProRes Proxy), se possibile, il timecode in sovrimpressione.
- Un **mix di riferimento** in WAV, cioè l'audio così come si sente in montaggio: serve per capire l'intenzione e per controllare il sincrono all'import.
- Se c'è, la cartella con i file della **presa diretta originale** con il bollettino sonoro: quello che serve al di là dell'AAF sta in [Cosa consegnare al sound designer](/guide/cosa-consegnare-al-sound-designer-aaf-handles-presa-diretta/).

<div class="riquadro">

**In breve.** Copia della sequenza senza nested/multicam · audio incorporato · handles 120+ fotogrammi · Broadcast Wave 48 kHz 24 bit · effetti audio non renderizzati · video di riferimento con lo stesso timecode.

</div>

## Un test prima della consegna vera

Su un progetto lungo, meglio esportare un AAF di 30 secondi qualche giorno prima del picture lock e mandarlo: se c'è un problema di impostazioni si vede subito e si risolve prima, non il giorno della consegna. Scrivimi e lo controllo.

## Fonti

<p class="fonti">Production Expert, "How To Create A Pro Tools Friendly AAF" per Adobe Premiere, DaVinci Resolve e Avid Media Composer (production-expert.com) · Avid Knowledge Base, "Media Composer AAF Audio Export Options for Pro Tools" (kb.avid.com) · Blackmagic Design, DaVinci Resolve Reference Manual, pagina Deliver, preset Pro Tools · Marquis Broadcast, X2Pro Audio Convert, guida alla conversione (x2pro.net) · Adobe, "Export AAF files", guida di Premiere Pro (helpx.adobe.com).</p>
