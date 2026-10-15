---
titolo: "Bollettino sonoro: cos'è e perché il fonico di presa diretta deve consegnarlo"
parola_evidenziata: "bollettino sonoro"
titolo_seo: "Bollettino sonoro (sound report) della presa diretta: cos'è, cosa contiene, un modello | Riccardo Vojvoda"
descrizione_seo: "Cos'è il bollettino sonoro della presa diretta, cosa scriverci take per take, chi lo compila e come si consegna in post-produzione audio. Con il modello che uso sui set di fiction."
date: 2026-11-03
bozza: true
copertina: bollettino-sonoro-cartellina-set.jpg
copertinaAlt: "Un bollettino sonoro compilato, fissato a una cartellina appoggiata sul registratore nella borsa del fonico, su un set di notte"
copertinaCredito: "Bollettino di Riccardo Vojvoda; sfondo generato con l'AI (FLUX.2)"
chiave: articolo-s12
categoria: Presa diretta
per_chi: ["regista-produzione", "montatore"]
argomento: ["presa-diretta", "consegna-materiali"]
tags: ["approfondimenti", "bollettino sonoro", "sound report", "rapporto audio", "presa diretta", "fonico di presa diretta", "metadati iXML", "post-produzione audio", "fiction", "wild track", "room tone"]
---
Il bollettino sonoro è il foglio in cui chi registra la presa diretta annota, take per take, cosa ha registrato: quale scena, quale ciak, quale microfono su quale traccia, se la take è buona o da scartare, cosa è successo. Viaggia insieme ai file audio e serve soprattutto a chi fa la post-produzione audio, che senza quel foglio deve ascoltare tutto per ritrovare quello che cerca.

Cosa consegnare in generale al sound designer (montato, AAF, presa diretta) è nella [guida su cosa consegnare](/guide/cosa-consegnare-al-sound-designer-aaf-handles-presa-diretta/). Qui si parla solo del bollettino.

## Cosa contiene

Non esiste un modello unico: ogni fonico ha il suo, adattato al registratore e al tipo di lavoro. Il mio, quello che uso con il MixPre sui set di fiction, ha queste colonne:

- **O/X**: take buona o scartata;
- **Take**: il numero del file;
- **Input**: per ogni traccia, la sigla del microfono e il numero del personaggio a cui è assegnato;
- **Scena e ciak**;
- **Location**;
- **Inquadratura**: la sigla del tipo di ripresa (primo piano, piano medio, campo largo, sopra la spalla);
- **Descrizione e commenti**;
- **REC2**: il numero del file sul secondo registratore, se c'è.

In testa a ogni pagina: registratore, data, episodio, progetto e giornata di riprese. In fondo al bollettino, una legenda con le sigle dei microfoni, delle inquadrature e la lista numerata del cast.

## Bollettino sonoro e rapporto di edizione

Sul set c'è già un documento che descrive le riprese: il rapporto di edizione, compilato dalla segretaria di edizione, che collega ogni take alla numerazione della camera. Il bollettino sonoro non lo sostituisce e non ha quella corrispondenza: è un documento pensato per la post-produzione audio. Anche il montatore può ricavarne informazioni, ma non trova il nome della take video.

Per questo la descrizione deve far capire a quale inquadratura si riferisce la take: il tipo di inquadratura, l'eventuale movimento di macchina, il personaggio inquadrato e l'azione. "Piano su Anna, entra in cucina" dice molto più di "take 2".

## A cosa serve in post-produzione

Il montaggio arriva in audio con l'AAF, che porta con sé le clip usate. Il bollettino serve quando quelle non bastano:

- nell'AAF manca una traccia, per esempio un radiomicrofono;
- una take è rumorosa o ha un problema e serve un'alternativa per la stessa battuta;
- bisogna coprire un buco con il tono d'ambiente (room tone) registrato nella stessa location;
- bisogna ritrovare le wild track, cioè le battute o i suoni registrati solo in audio, senza camera.

Con il bollettino queste ricerche durano pochi minuti. Senza, si riascoltano intere giornate di registrazione.

## Le note

Nei commenti va tutto quello che chi lavora in post non può sapere: un aereo, un generatore, il traffico, una battuta rifatta solo audio, un tono d'ambiente, un microfono che ha dato problemi, una traccia che ha cambiato nome. Meglio un'informazione in più che una in meno.

Un accorgimento che uso sempre: non ripeto un'informazione nella riga successiva se non è cambiato niente. Il bollettino resta più leggibile e i cambi (un microfono spostato, una scena nuova) saltano all'occhio.

## Chi lo compila e quando

Lo compila chi registra: il fonico di presa diretta, il microfonista o un assistente, una riga per take. Si può completare a fine giornata, soprattutto quando si lavora da soli e durante le riprese le mani servono alla giraffa e al registratore.

## Carta o metadati nei file

I registratori professionali possono scrivere scena, take, nomi delle tracce e note dentro i file WAV (metadati iXML), e alcuni generano da soli un sound report: i Sound Devices delle serie maggiori, lo Zoom F8n Pro, il MixPre attraverso l'app Wingman. È il modo più completo, ma richiede tempo durante le riprese.

Quando sono da solo registro, ascolto e tengo la giraffa nello stesso momento: non c'è tempo per inserire i metadati take per take, e il bollettino scritto resta il modo più rapido. In una squadra con almeno un fonico al mixer e un microfonista, i metadati diventano possibili, e il bollettino resta comunque utile come colpo d'occhio sull'intera giornata.

## Come si consegna

Il bollettino si consegna in PDF, insieme ai file della giornata. Frequenza di campionamento, frame rate e timecode servono soprattutto al montatore e arrivano già con i file e con l'AAF, ma scriverli anche nel bollettino non guasta: più informazioni ci sono, più il lavoro è professionale.

## Un modello da copiare

Le colonne si adattano al lavoro: per uno spot ne bastano meno, per una serie ne servono di più.

<div class="riquadro">
<p>Testata: registratore · data · episodio · progetto · giornata<br>
Colonne: O/X · take · input (microfono e personaggio per traccia) · scena · ciak · location · inquadratura · descrizione e commenti · file sul secondo registratore<br>
Legenda: sigle dei microfoni · sigle delle inquadrature · cast numerato</p>
</div>

Per una produzione che cerca un fonico di presa diretta, o per una presa diretta già registrata da portare in post-produzione, [scrivimi](/contatti/).

## Fonti

<ul class="fonti">
<li>iXML, specifica dei metadati per l'audio di produzione (ixml.info)</li>
<li>EBU, Tech 3285, specifica del formato Broadcast Wave (tech.ebu.ch)</li>
<li>Sound Devices, Sound Reports e app Wingman (sounddevices.com)</li>
<li>Zoom, manuale dell'F8n Pro, Create Sound Report (zoomcorp.com)</li>
</ul>
