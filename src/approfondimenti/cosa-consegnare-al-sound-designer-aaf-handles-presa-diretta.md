---
titolo: "Cosa consegnare al sound designer: AAF, handles e presa diretta"
titolo_seo: "Cosa consegnare al sound designer: AAF, handles e presa diretta | Riccardo Vojvoda"
descrizione_seo: "La lista dei materiali che servono per iniziare la post-produzione audio di un video: video di riferimento, AAF con handles, presa diretta originale, musiche e un brief di tre righe. Con gli errori più comuni."
date: 2026-09-22
bozza: true
chiave: articolo-s01
categoria: Consegna dei materiali
copertina: montaggio-timeline-consegna-audio.jpg
copertinaAlt: "Superficie di controllo di uno studio di post-produzione audio"
copertinaCredito: "Foto: pxhere, CC0"
tags: ["approfondimenti", "AAF", "OMF", "handles", "presa diretta", "post-produzione audio", "Premiere Pro", "DaVinci Resolve", "Pro Tools", "consegna materiali sound design"]
---
Il montaggio è chiuso, il cliente ha approvato, e ora il video deve andare "in audio". A questo punto arriva sempre la stessa domanda: cosa vi mando? La risposta breve è: cinque cose. Qui sotto trovate la lista, con il perché di ogni voce e gli errori che fanno perdere più tempo.

## 1. Il video di riferimento

Serve un file video che sia esattamente il montaggio approvato, con queste caratteristiche:

- **Stesso frame rate del progetto** (25, 24, 23,976, 30: quello che usate voi, senza conversioni).
- **Timecode visibile in sovrimpressione** (il cosiddetto burn-in) e timecode di partenza uguale a quello della timeline, per esempio 01:00:00:00. Senza, ogni nota del tipo "il rumore a 2 minuti e 14" diventa una ricerca.
- **Risoluzione ridotta**: un H.264 a 1080p o un ProRes Proxy bastano. Non serve il master 4K, che pesa dieci volte tanto e non si vede meglio in sala audio.
- **L'audio del montaggio dentro il file**, mixato come lo sentite voi. È il riferimento per capire cosa avevate in mente, non la base di lavoro.

## 2. L'AAF, con gli handles

L'AAF (Advanced Authoring Format) è il file che trasferisce la timeline audio dal programma di montaggio a quello di post-produzione, con tagli, posizioni, nomi delle clip e livelli. Le cose da impostare nell'esportazione:

- **Audio incorporato** (embedded), non collegato: così arriva tutto in un file solo.
- **Handles di almeno 5 secondi** (120 fotogrammi a 24 fps, 125 a 25 fps). Gli handles sono i pezzi di audio prima e dopo ogni taglio: servono per allungare una clip, ammorbidire un attacco, coprire un buco. Senza handles ogni taglio è un muro.
- **48 kHz, 24 bit**, senza conversioni.
- **Niente effetti "cotti" dentro**: se avete messo un equalizzatore o un riduttore di rumore in montaggio, disattivatelo prima di esportare. Il volume delle clip e le dissolvenze invece vanno bene, si leggono.
- **Tracce ordinate**: dialoghi in alto, poi effetti, poi musiche. Non è obbligatorio, ma fa risparmiare un'ora.
- **Mono separati**: in Premiere le tracce stereo "linkate" che contengono in realtà due mono identici (tipico dei radiomicrofoni) vanno separate.

Se il vostro programma propone anche OMF: lasciate perdere. È il formato vecchio, ha un limite di 2 GB e perde informazioni. **AAF sempre.**

Da DaVinci Resolve, Premiere Pro, Avid Media Composer e Final Cut Pro (con X2Pro) l'esportazione AAF esiste in tutti i casi. Se avete dubbi sulle impostazioni, chiedete prima di esportare: una risposta di due righe evita di rifarlo.

## 3. La presa diretta originale

Se il video è girato con un fonico di presa diretta, servono **le cartelle originali del registratore**, non solo l'audio che sta nell'AAF. Il motivo: nell'AAF c'è di solito un solo canale (o un mix) per clip, mentre nei file originali ci sono tutti i microfoni separati, l'asta, i radiomicrofoni, i metadati con nomi di scena e take, e il **bollettino sonoro** con le note del fonico. Da lì si recupera la voce pulita quando nel montaggio è finito il canale sbagliato, e capita spesso.

Se avete girato senza fonico, con l'audio della camera o un registratore a parte, mandate comunque tutto il girato audio così com'è, in una cartella con la data.

## 4. Le musiche e la loro licenza

Per ogni brano scelto: **il file in qualità piena** (WAV o AIFF, non l'MP3 scaricato per la prova) e **la licenza** o il riferimento del catalogo. Se una musica è provvisoria, scrivetelo: la musica temporanea è la prima cosa a cui ci si affeziona e l'ultima che si riesce a sostituire. Se il brano va ancora scelto, è il momento giusto per dirlo.

## 5. Un brief di tre righe

Non serve un documento. Bastano queste informazioni:

- **Dove va il video**: TV, cinema, sito, social, fiera. Cambia il formato di consegna e il livello di volume (loudness).
- **In che formato lo volete indietro**: stereo, 5.1, stem separati (dialoghi, musica, effetti), versioni in più lingue.
- **Quando serve** e quanti giri di revisione avete previsto.

<div class="riquadro">
<p><strong>La lista in breve.</strong> Video di riferimento con timecode · AAF incorporato con handles da 5 secondi · presa diretta originale con bollettino · musiche in WAV con licenza · destinazione, formato, data.</p>
</div>

## Gli errori che costano più tempo

1. **Il montaggio cambia dopo la consegna.** Ogni modifica al video dopo l'invio dell'AAF vuol dire riallineare a mano tutto il lavoro fatto (in gergo: reconform). Meglio un giorno di attesa in più che un picture lock finto.
2. **AAF senza handles.** Si capisce al primo taglio e si torna indietro.
3. **Frame rate diverso tra video e AAF.** Tutto scivola di qualche fotogramma e i dialoghi finiscono fuori sincrono.
4. **Timecode di partenza diverso** tra il video e la timeline.
5. **Musica in MP3** o, peggio, il file scaricato da YouTube.
6. **Effetti audio già applicati** nell'AAF: il riduttore di rumore del montaggio non si toglie più.

Se una di queste cose è già successa, non è la fine del mondo: si sistema. Ma è una giornata in più nel preventivo, ed è meglio saperlo prima.

## Non sapete come esportare?

Scrivetemi prima di farlo. Vi mando le impostazioni per il vostro programma, così l'esportazione si fa una volta sola.
