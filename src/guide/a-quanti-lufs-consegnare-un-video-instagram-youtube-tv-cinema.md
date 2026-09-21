---
titolo: "A quanti LUFS va consegnato un video? Instagram, YouTube, TV e cinema a confronto"
titolo_seo: "A quanti LUFS va consegnato un video? Instagram, YouTube, TV e cinema | Riccardo Vojvoda"
descrizione_seo: "I livelli di loudness per ogni destinazione di un video: -14 LUFS per YouTube e social, -23 LUFS per la TV (EBU R128), -27 LKFS dialoghi per Netflix, sala calibrata al cinema. Con il true peak e cosa fanno le piattaforme al file."
date: 2026-10-06
bozza: true
chiave: articolo-s02
categoria: Mix e loudness
per_chi: ["montatore", "regista-produzione", "agenzia"]
argomento: ["mix-loudness"]
tags: ["approfondimenti", "LUFS", "loudness", "EBU R128", "true peak", "YouTube", "Instagram", "TikTok", "Netflix", "spot TV", "mix per social", "post-produzione audio"]
---
Il LUFS (Loudness Unit Full Scale) misura quanto forte si sente un programma nel suo insieme, non quanto è alto il picco. È il numero che le piattaforme e le TV usano per decidere quanto alzare o abbassare un video, e per questo è la prima cosa da sapere prima di chiudere il mix. I valori qui sotto sono quelli in uso a settembre 2026.

## La tabella

| Destinazione | Loudness integrata | True peak | Chi lo dice |
|---|---|---|---|
| YouTube | -14 LUFS | -1 dBTP | YouTube |
| Instagram, Facebook, TikTok | -14 LUFS (stima) | -1 dBTP | nessun valore ufficiale |
| Sito web, fiera, presentazione | -16 / -14 LUFS | -1 dBTP | prassi |
| TV e spot TV in Europa | -23 LUFS (±0,5 LU) | -1 dBTP | EBU R128 |
| TV USA | -24 LKFS | -2 dBTP | ATSC A/85 |
| Netflix | -27 LKFS (±2) sui dialoghi | -2 dBTP | Netflix |
| Podcast (Apple) | -16 LUFS | -1 dBTP | Apple |
| Cinema | nessun target LUFS: sala calibrata | | Dolby / SMPTE |

LUFS e LKFS sono la stessa unità con due nomi (europeo e americano). dBTP è il true peak, il picco vero del segnale dopo la conversione digitale-analogica: si misura con un meter true peak, non con il peak meter normale.

## YouTube: -14 LUFS, e abbassa soltanto

YouTube normalizza a circa -14 LUFS. Un video più forte viene abbassato; un video più debole **non** viene alzato. Quindi un mix a -20 LUFS su YouTube si sente più basso di tutti gli altri, e un mix a -9 LUFS viene riportato a -14 con il solo risultato di aver perso dinamica. Il livello utile è -14 con i picchi a -1 dBTP. Il valore applicato si legge nel player, tasto destro > "Statistiche per nerd", alla voce "Volume / Normalized".

## Instagram, Facebook, TikTok: nessun numero ufficiale

Meta e TikTok non pubblicano un target. Meta ricodifica l'audio in xHE-AAC con una gestione del volume adattiva, che cambia in base al contesto di riproduzione; le misure fatte da chi ci lavora si raggruppano intorno a -14 LUFS. TikTok nel feed, a luglio 2026, non normalizza: un file più forte si sente davvero più forte, con la compressione che comporta.

Il valore difendibile per un reel o uno spot social è **-14 LUFS, picchi a -1 dBTP**. Se un brief chiede "più forte", si può salire a -12 sapendo che si sta rinunciando a dinamica, non che si sta rispettando una specifica. Da tenere presente che il file viene comunque ricompresso dalla piattaforma (AAC a bitrate basso): i picchi a -1 dBTP servono a non distorcere in quel passaggio.

## Sito, fiere, presentazioni

Non c'è normalizzazione: il file si sente esattamente come è stato consegnato. -16 LUFS è il livello che funziona sia in cuffia sia da un notebook; -14 se il video vive accanto a contenuti social. Su uno schermo da fiera con casse proprie il volume lo decide l'impianto, e conta di più un mix con la voce davanti che il numero.

## TV e spot TV: EBU R128

In Europa, Italia compresa, le emittenti applicano la raccomandazione **EBU R128**: loudness integrata **-23 LUFS**, tolleranza ±0,5 LU (±1 LU per il live), true peak massimo **-1 dBTP**. Per gli spot e i contenuti brevi vale anche il limite della loudness a breve termine (short-term) a **-18 LUFS**, così uno spot non può risultare più forte del programma in cui è inserito. Il file fuori tolleranza viene rifiutato o rinormalizzato dalla messa in onda, e nel secondo caso il risultato non lo controlla nessuno.

Ogni emittente ha le sue specifiche di consegna (formato, tracce, layout audio): meglio chiederle prima di mixare, non dopo.

## Netflix e le piattaforme di streaming

Netflix misura la loudness **sui dialoghi** (dialog-gated) e chiede **-27 LKFS ±2**, true peak **-2 dBTP**. Amazon Prime Video chiede -24 LKFS ±2 sul programma intero, con lo stesso true peak; Apple TV+ e Disney+ hanno ciascuna il proprio documento di consegna. Sono livelli molto più bassi dei social perché la misura è diversa (solo il parlato) e perché l'ascolto è in una stanza, non in cuffia in metropolitana.

## Cinema: niente LUFS, la sala è calibrata

In sala non c'è normalizzazione: il proiettore riproduce il file al livello di calibrazione standard (85 dB SPL a -20 dBFS per canale, il "fader a 7" Dolby). Quindi il mix si giudica in una sala calibrata allo stesso modo e il livello lo decide il mix stesso; un film mixato in cuffia a -14 LUFS in sala risulta assordante. Per i trailer esiste un tetto a parte, il **Leq(m) 85 dB** (TASA), misurato con una curva pesata diversa dai LUFS. In pratica, un mix per cinema si fa o si verifica in una sala calibrata, e il tema del LUFS si pone solo quando dello stesso film si prepara la versione per streaming o TV.

## Un solo mix per tutte le destinazioni?

No: fra -14 e -23 LUFS ci sono 9 LU di differenza, quasi il doppio del volume percepito. Il metodo è:

1. Mixare **una volta** al livello della destinazione principale, di solito la più esigente (TV o streaming).
2. Derivare le altre versioni da quel mix con il solo cambio di livello e di limiter, verificando il true peak su ogni versione.
3. Consegnare ogni file con il nome che dice a cosa serve (`_TV_R128`, `_web_-14`), così nessuno carica quello sbagliato.

Un mix nato a -14 LUFS non si porta a -23 semplicemente abbassandolo: la compressione già stampata resta. Il contrario invece funziona.

<div class="riquadro">

**In breve.** YouTube e social -14 LUFS / -1 dBTP · web e fiere -16 / -14 · TV europea -23 LUFS / -1 dBTP con short-term massimo -18 per gli spot · Netflix -27 LKFS sui dialoghi / -2 dBTP · cinema sala calibrata, trailer Leq(m) 85.

</div>

## Cosa serve per la verifica

Basta il file finale e la lista delle destinazioni. La misura di loudness integrata, true peak e short-term si fa in pochi minuti e restituisce un report per ogni versione. Se il video deve andare in più posti, scrivimi prima del mix finale: si decide il livello di partenza e le versioni escono tutte insieme.

## Fonti

<p class="fonti">EBU R 128 v5.0, "Loudness normalisation and permitted maximum level of audio signals" e supplemento s2 sui contenuti brevi (tech.ebu.ch) · ATSC A/85, "Techniques for Establishing and Maintaining Audio Loudness for Digital Television" · Netflix Partner Help Center, "Sound Mix Specifications and Best Practices" · Amazon Video Central, specifiche audio · Apple Podcasts for Creators, "Audio requirements" · Forasoft, "LUFS targets per platform in 2026" (forasoft.com), per Meta xHE-AAC e TikTok senza normalizzazione · TASA, Trailer Audio Standards (Leq(m) 85) · Dolby, calibrazione della sala a 85 dB SPL.</p>
