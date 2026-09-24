---
titolo: "What LUFS should a video be delivered at? Instagram, YouTube, TV and cinema compared"
titolo_seo: "What LUFS should a video be delivered at? Instagram, YouTube, TV and cinema | Riccardo Vojvoda"
descrizione_seo: "Loudness levels for every destination of a video: -14 LUFS for YouTube and social, -23 LUFS for TV (EBU R128), -27 LKFS dialogue for Netflix, calibrated theatre for cinema. With true peak and what platforms do to the file."
date: 2026-09-24
copertina: lufs-video-loudness-resolve.jpg
copertinaAlt: "Loudness meter with the YouTube preset: integrated loudness at -14 LUFS and true peak at -1.7 dBTP"
copertinaCredito: "Screenshot: Fairlight, DaVinci Resolve"
chiave: articolo-s02
categoria: Mix and loudness
per_chi: ["montatore", "regista-produzione", "agenzia"]
argomento: ["mix-loudness"]
tags: ["approfondimenti_en", "LUFS", "loudness", "EBU R128", "true peak", "YouTube", "Instagram", "TikTok", "Netflix", "TV commercial", "mix for social", "audio post-production"]
---
LUFS (Loudness Units relative to Full Scale) measures how loud a programme sounds as a whole, not how high its peak is. It is the number platforms and broadcasters use to decide how much to turn a video up or down, and so it is the first thing to know before closing the mix. The values below are those in use in September 2026.

## The table

| Destination | Integrated loudness | True peak | Who says so |
|---|---|---|---|
| YouTube | -14 LUFS | -1 dBTP | YouTube |
| Instagram, Facebook, TikTok | -14 LUFS (estimate) | -1 dBTP | no official value |
| Website, trade show, presentation | -16 / -14 LUFS | -1 dBTP | common practice |
| TV and TV commercials in Europe | -23 LUFS (±0.5 LU) | -1 dBTP | EBU R128 |
| US TV | -24 LKFS | -2 dBTP | ATSC A/85 |
| Netflix | -27 LKFS (±2) on dialogue | -2 dBTP | Netflix |
| Podcast (Apple) | -16 LUFS | -1 dBTP | Apple |
| Cinema | no LUFS target: calibrated theatre | | Dolby / SMPTE |

LUFS and LKFS are the same unit with two names (European and American). dBTP is true peak, the real peak of the signal after digital-to-analogue conversion: it is measured with a true peak meter, not with the regular peak meter.

## YouTube: -14 LUFS, and it only turns down

YouTube normalises to about -14 LUFS. A louder video is turned down; a quieter video is **not** turned up. So a mix at -20 LUFS sounds quieter than everything else on YouTube, and a mix at -9 LUFS is brought back to -14 with the only result of having lost dynamics. The useful level is -14 with peaks at -1 dBTP. The applied value can be read in the player, right click > "Stats for nerds", under "Volume / Normalized".

## Instagram, Facebook, TikTok: no official number

Meta and TikTok do not publish a target. Meta re-encodes audio in xHE-AAC with adaptive volume management, which changes with the playback context; measurements by people who work with it cluster around -14 LUFS. TikTok does not normalise in the feed as of July 2026: a louder file really does sound louder, with the compression that comes with it.

The defensible value for a reel or a social ad is **-14 LUFS, peaks at -1 dBTP**. If a brief asks for "louder", it can go up to -12, knowing that dynamics are being given up, not that a specification is being met. Keep in mind that the platform re-compresses the file anyway (low-bitrate AAC): peaks at -1 dBTP are there so that it does not distort in that step.

## Website, trade shows, presentations

There is no normalisation: the file sounds exactly as delivered. -16 LUFS is the level that works both on headphones and from a laptop; -14 if the video sits next to social content. On a trade show screen with its own speakers the volume is set by the system, and a mix with the voice up front counts more than the number.

## TV and TV commercials: EBU R128

In Europe, Italy included, broadcasters apply the **EBU R128** recommendation: integrated loudness **-23 LUFS**, tolerance ±0.5 LU (±1 LU for live), maximum true peak **-1 dBTP**. For commercials and short content the short-term loudness limit of **-18 LUFS** also applies, so an ad cannot sound louder than the programme it sits in. A file outside tolerance is rejected or renormalised by playout, and in the second case nobody controls the result.

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

<div class="riquadro">

**In short.** YouTube and social -14 LUFS / -1 dBTP · web and trade shows -16 / -14 · European TV -23 LUFS / -1 dBTP with short-term max -18 for ads · Netflix -27 LKFS on dialogue / -2 dBTP · cinema calibrated theatre, trailers Leq(m) 85.

</div>

## What is needed for the check

The final file and the list of destinations are enough. Measuring integrated loudness, true peak and short-term takes a few minutes and returns a report for each version. If the video has to go to several places, write to me before the final mix: the starting level gets decided and the versions all come out together.

## Sources

<p class="fonti">EBU R 128 v5.0, "Loudness normalisation and permitted maximum level of audio signals" and supplement s2 on short-form content (tech.ebu.ch) · ATSC A/85, "Techniques for Establishing and Maintaining Audio Loudness for Digital Television" · Netflix Partner Help Center, "Sound Mix Specifications and Best Practices" · Amazon Video Central, audio specifications · Apple Podcasts for Creators, "Audio requirements" · Forasoft, "LUFS targets per platform in 2026" (forasoft.com), for Meta xHE-AAC and TikTok without normalisation · TASA, Trailer Audio Standards (Leq(m) 85) · Dolby, theatre calibration at 85 dB SPL.</p>
