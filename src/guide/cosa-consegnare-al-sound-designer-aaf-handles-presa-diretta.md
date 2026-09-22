---
titolo: "Cosa consegnare al sound designer: esporto video, AAF e presa diretta"
titolo_seo: "Cosa consegnare al sound designer: esporto video, AAF e presa diretta | Riccardo Vojvoda"
descrizione_seo: "La lista dei materiali che servono per iniziare la post-produzione audio di un video: video di riferimento, AAF con handles, presa diretta originale, musiche e un brief di tre righe. Con gli errori più comuni."
date: 2026-09-22
chiave: articolo-s01
categoria: Consegna dei materiali
per_chi: ["montatore", "regista-produzione"]
argomento: ["consegna-materiali"]
copertina: montaggio-timeline-consegna-audio.jpg
copertinaAlt: "Timeline di montaggio video con le tracce audio sul monitor"
copertinaCredito: "Foto: Bas Peperzak, Unsplash"
tags: ["approfondimenti", "AAF", "OMF", "handles", "presa diretta", "post-produzione audio", "Premiere Pro", "DaVinci Resolve", "Pro Tools", "consegna materiali sound design"]
---
Il montaggio è chiuso, il cliente ha approvato, e ora il video deve andare "in audio". A questo punto arriva sempre la stessa domanda: cosa mando? Qui sotto la lista, con il perché di ogni voce e gli errori che fanno perdere più tempo.

## 1. Il video di riferimento

Serve un file video che sia esattamente il montaggio approvato, con queste caratteristiche:

- **Stesso frame rate del progetto** (25, 24, 23,976, 30: quello del progetto, senza conversioni).
- **Risoluzione ridotta**: un H.264 a 1080p o un ProRes Proxy. Non serve il master 4K.
- **L'audio del montaggio dentro il file**, mixato come si sente in montaggio.
- (Facoltativo) Timecode visibile in sovrimpressione (burn-in) e timecode di partenza uguale a quello della timeline, per esempio 01:00:00:00.

## 2. L'AAF, con gli handles

L'AAF (Advanced Authoring Format) è il file che trasferisce la timeline audio dal programma di montaggio a quello di post-produzione, con tagli, posizioni, nomi delle clip e livelli. Le cose da impostare nell'esportazione:

- Meglio se **con audio incorporato** (embedded), non collegato: così arriva tutto in un file solo.
- **Handles di almeno 5 secondi** (120 fotogrammi a 24 fps, 125 a 25 fps). Gli handles sono il margine di lavoro delle clip audio, prima e dopo ogni taglio: servono per allungare una clip, ammorbidire un attacco, coprire un buco, modificare un crossfade.
- **48 kHz, 24 bit**, senza conversioni.
- **Niente effetti audio stampati sui file**: gli effetti di montaggio (equalizzatore, riduttore di rumore) non viaggiano nell'AAF, ma Premiere e Avid hanno un'opzione di esportazione che li renderizza dentro i file audio ("Render audio clip effects" in Premiere). Va lasciata spenta. Il volume delle clip e le dissolvenze invece vanno bene, si leggono.
- **Tracce ordinate**: dialoghi in alto, poi effetti, poi musiche. Non è obbligatorio, ma fa risparmiare un'ora.

Se il programma propone anche OMF: meglio lasciar perdere. È il formato vecchio, ha un limite di 2 GB e perde informazioni. **AAF sempre.**

Da DaVinci Resolve, Premiere Pro, Avid Media Composer e Final Cut Pro (con X2Pro) l'esportazione AAF esiste in tutti i casi. Se ci sono dubbi sulle impostazioni, chiedimi pure prima di esportare.

## 3. La presa diretta originale

Se il video è girato con un fonico di presa diretta, servono **le cartelle originali del registratore**, non solo l'audio che sta nell'AAF. Il motivo: nei file originali possono esserci take alternative, utili per sostituire piccoli errori o recuperare materiale simile, coerente con il suono di produzione.

Fondamentale, per produzioni corpose, è il **bollettino sonoro** con le note del fonico: da lì si recuperano tutte le informazioni sul registrato.

Se si è girato senza fonico, con l'audio della camera o un registratore a parte, è possibile che venga richiesto comunque tutto il girato audio.

## 4. Le musiche e la loro licenza

Per ogni brano scelto: **il file in qualità piena** (WAV o AIFF, non l'MP3 scaricato per la prova) e **la licenza** o il riferimento del catalogo.

## 5. Un brief di tre righe

Bastano queste informazioni:

- **Video di riferimento** estetico, stilistico, tecnico (ads, film, documentari ecc.).
- **Dove va il video**: TV, cinema, sito, social, fiera. Cambia il formato di consegna e il livello di volume (loudness).
- **In che formato va consegnato**: stereo, 5.1, stem separati (dialoghi, musica, effetti), versioni in più lingue.
- **Deadline.**

<div class="riquadro">

**La lista in breve.** Video di riferimento con timecode · AAF incorporato con handles da 5 secondi · presa diretta originale con bollettino · musiche in WAV con licenza · destinazione, formato, data, eventuale reference.

</div>

## Gli errori che costano più tempo

1. **Il montaggio cambia dopo la consegna.** Ogni modifica al video dopo l'invio dell'AAF vuol dire riallineare a mano tutto il lavoro fatto (in gergo: reconform). Meglio un giorno di attesa in più che un picture lock finto.
2. **AAF senza handles.** Se serve una porzione tagliata male, bisogna per forza risincronizzare la take originale.
3. **Frame rate diverso tra video e AAF.** Tutto scivola di qualche fotogramma e i dialoghi finiscono fuori sincrono.
4. **Timecode di partenza diverso** tra il video e la timeline.
5. **Musica in MP3.**
6. **Effetti audio già applicati** nell'AAF: il riduttore di rumore del montaggio non si toglie più.

Se una di queste cose è già successa, non è la fine del mondo: si sistema. Ma può costare una giornata di lavoro in più.

## Dubbi su come esportare?

Meglio scrivermi prima: mando le impostazioni per il programma usato, così l'esportazione si fa una volta sola.
