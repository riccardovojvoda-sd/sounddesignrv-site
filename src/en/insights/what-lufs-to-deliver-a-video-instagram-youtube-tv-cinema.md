---
titolo: "What LUFS should a video be delivered at? Instagram, YouTube, TV and cinema compared"
parola_evidenziata: "LUFS"
titolo_seo: "What LUFS should a video be delivered at? Instagram, YouTube, TV and cinema | Riccardo Vojvoda"
descrizione_seo: "Loudness levels for every destination of a video: -14 LUFS for YouTube and social, -23 LUFS for European TV (EBU R128), -24 LUFS in Italy (AGCOM), -27 LKFS dialogue for Netflix, calibrated theatre for cinema. With true peak and what platforms do to the file."
date: 2026-09-24
copertina: lufs-video-loudness-resolve.jpg
copertinaAlt: "Loudness meter with the YouTube preset: integrated loudness at -14 LUFS and true peak at -1.7 dBTP"
copertinaCredito: "Screenshot: Fairlight, DaVinci Resolve"
chiave: articolo-s02
categoria: Mix and loudness
per_chi: ["montatore", "regista-produzione", "agenzia"]
argomento: ["mix-loudness"]
tags: ["approfondimenti_en", "LUFS", "loudness", "EBU R128", "true peak", "YouTube", "Instagram", "TikTok", "Netflix", "TV commercial", "mix for social", "audio post-production"]
domande_faq:
  - d: "What LUFS should a video be delivered at for YouTube, Instagram and TikTok?"
    r: "At -14 LUFS integrated loudness, with peaks at -1 dBTP. YouTube turns down louder videos and does not turn up quieter ones. Meta and TikTok do not publish an official value, but measurements cluster around -14 LUFS."
  - d: "What LUFS should a commercial be delivered at for Italian TV?"
    r: "At -24 LUFS integrated loudness, tolerance ±0.5 LU, maximum true peak -2 dBTP, as set by AGCOM resolution 219/09/CSP. The European reference EBU R128 asks for -23 LUFS and -1 dBTP; for commercials the short-term loudness must not exceed -18 LUFS."
  - d: "How many LKFS does Netflix require?"
    r: "-27 LKFS ±2 measured on dialogue only, with a maximum true peak of -2 dBTP. Amazon Prime Video asks for -24 LKFS ±2 on the whole programme."
  - d: "Is there a LUFS level for cinema?"
    r: "No. In the theatre the file is played at the standard calibration level (85 dB SPL at -20 dBFS per channel), so the mix is judged in a calibrated theatre. Trailers have the Leq(m) 85 dB ceiling."
  - d: "Is one mix enough for every destination?"
    r: "You mix once at the level of the most demanding destination, usually TV or streaming, and derive the other versions by changing level and limiter. The opposite does not work: a mix born at -14 LUFS does not become a good mix at -23 by turning it down, because the compression stays printed."
---
LUFS (Loudness Units relative to Full Scale) measures how loud a programme sounds as a whole, not how high its peak is. It is the number platforms and broadcasters use to decide how much to turn a video up or down, and so it is the first thing to know before closing the mix. The values below are those in use in September 2026.

<div class="riquadro">

**The short answer.** YouTube and social -14 LUFS / -1 dBTP · web and trade shows -16 / -14 · European TV -23 LUFS / -1 dBTP with short-term max -18 for ads · Italian TV -24 LUFS / -2 dBTP (AGCOM) · Netflix -27 LKFS on dialogue / -2 dBTP · cinema calibrated theatre, trailers Leq(m) 85.

</div>

## The table

| Destination | Integrated loudness | True peak | Who says so |
|---|---|---|---|
| YouTube | -14 LUFS | -1 dBTP | YouTube Stats for nerds |
| Instagram, Facebook, TikTok | -14 LUFS (estimate) | -1 dBTP | no official value |
| Website, trade show, presentation | -16 / -14 LUFS | -1 dBTP | common practice |
| TV and TV commercials in Europe | -23 LUFS (±0.5 LU) | -1 dBTP | EBU R128 |
| TV and TV commercials in Italy | -24 LUFS (±0.5 LU) | -2 dBTP | AGCOM 219/09/CSP |
| US TV | -24 LKFS | -2 dBTP | ATSC A/85 |
| Netflix | -27 LKFS (±2) on dialogue | -2 dBTP | Netflix |
| Podcast (Apple) | -16 LUFS | -1 dBTP | Apple |
| Cinema | no LUFS target: calibrated theatre | | Dolby / SMPTE |

LUFS and LKFS are the same unit with two names (European and American). dBTP is true peak, the real peak of the signal after digital-to-analogue conversion: it is measured with a true peak meter, not with the regular peak meter.

## YouTube: -14 LUFS, and it only turns down

YouTube normalises to about -14 LUFS. A louder video is turned down; a quieter video is **not** turned up. So a mix at -20 LUFS sounds quieter than everything else on YouTube, and a mix at -9 LUFS is brought back to -14 with the only result of having lost dynamics. The useful level is -14 with peaks at -1 dBTP. The applied value can be read in the player, right click > "Stats for nerds", under "Volume / Normalized", next to "content loudness": the gap in dB between the video and YouTube's reference, which matches about -14 LUFS. YouTube does not state this value in an official document: it is read from there.

## Instagram, Facebook, TikTok: no official number

Meta and TikTok do not publish a target. Meta re-encodes audio in xHE-AAC with adaptive volume management, which changes with the playback context; measurements by people who work with it cluster around -14 LUFS. On TikTok measurements disagree: some find normalisation around -14 LUFS, others none. Better not to count on the platform turning down a file that is too loud.

The defensible value for a reel or a social ad is **-14 LUFS, peaks at -1 dBTP**. If a brief asks for "louder", it can go up to -12, knowing that dynamics are being given up, not that a specification is being met. Keep in mind that the platform re-compresses the file anyway (low-bitrate AAC): peaks at -1 dBTP are there so that it does not distort in that step.

## Website, trade shows, presentations

There is no normalisation: the file sounds exactly as delivered. -16 LUFS is the level that works both on headphones and from a laptop; -14 if the video sits next to social content. On a trade show screen with its own speakers the volume is set by the system, and a mix with the voice up front counts more than the number.

## TV and TV commercials: EBU R128 and, in Italy, AGCOM

In Europe broadcasters apply the **EBU R128** recommendation: integrated loudness **-23 LUFS**, tolerance ±0.5 LU (±1 LU for live), maximum true peak **-1 dBTP**. For commercials and short content the short-term loudness limit of **-18 LUFS** also applies, so an ad cannot sound louder than the programme it sits in. A file outside tolerance is rejected or renormalised by playout, and in the second case nobody controls the result.

**In Italy** the rule is **AGCOM resolution 219/09/CSP**, written precisely for the loudness of commercials: same measurement (ITU-R BS.1770), but integrated loudness **-24 LUFS**, tolerance ±0.5 LU, maximum true peak **-2 dBTP**. It is the reference for Italian broadcasters, RAI included: a master for Italian TV is delivered at -24, not -23.

Each broadcaster has its own delivery specifications (format, tracks, audio layout): better to ask for them before mixing, not after.

## Netflix and streaming platforms

Netflix measures loudness **on dialogue** (dialog-gated) and asks for **-27 LKFS ±2**, true peak **-2 dBTP**. Amazon Prime Video asks for -24 LKFS ±2 on the whole programme, with the same true peak; Apple TV+ and Disney+ each have their own delivery document. These levels are much lower than social ones because the measurement is different (speech only) and because listening happens in a room, not on headphones on the underground.

## Cinema: no LUFS, the theatre is calibrated

There is no normalisation in the theatre: the projector plays the file at the standard calibration level (85 dB SPL at -20 dBFS per channel, the Dolby "fader at 7"). So the mix is judged in a theatre calibrated the same way and the level is set by the mix itself; a film mixed on headphones at -14 LUFS is deafening in a theatre. Trailers have a separate ceiling, **Leq(m) 85 dB** (TASA), measured with a weighting curve different from LUFS. In practice, a cinema mix is made or checked in a calibrated theatre, and LUFS only comes into play when a streaming or TV version of the same film is prepared.

## One mix for every destination?

No: between -14 and -23 LUFS there are 9 LU of difference, almost twice the perceived loudness. The method is:

1. Mix **once** at the level of the main destination, usually the most demanding one (TV or streaming).
2. Derive the other versions from that mix by changing only level and limiter, checking the true peak on each version.
3. Deliver each file with a name that says what it is for (`_TV_R128`, `_web_-14`), so nobody uploads the wrong one.

A mix born at -14 LUFS is not brought to -23 simply by turning it down: the compression already printed stays. The opposite does work.

## What is needed for the check

The final file and the list of destinations are enough. Measuring integrated loudness, true peak and short-term takes a few minutes and returns a report for each version. If the video has to go to several places, write to me before the final mix: the starting level gets decided and the versions all come out together.

## Sources

<ul class="fonti">
<li>AGCOM, resolution 219/09/CSP (agcom.it)</li>
<li>EBU R 128 v5.0, "Loudness normalisation and permitted maximum level of audio signals" and supplement s2 on short-form content (tech.ebu.ch)</li>
<li>ATSC A/85, "Techniques for Establishing and Maintaining Audio Loudness for Digital Television"</li>
<li>Netflix Partner Help Center, "Sound Mix Specifications and Best Practices"</li>
<li>Amazon Video Central, audio specifications</li>
<li>Apple Podcasts for Creators, "Audio requirements"</li>
<li>Forasoft, "LUFS targets per platform in 2026" (forasoft.com), for Meta xHE-AAC</li>
<li>YouTube, Stats for nerds (content loudness)</li>
<li>TASA, Trailer Audio Standards (Leq(m) 85)</li>
<li>Dolby, theatre calibration at 85 dB SPL</li>
</ul>
