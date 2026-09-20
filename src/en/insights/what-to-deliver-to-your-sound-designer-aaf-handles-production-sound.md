---
titolo: "What to deliver to your sound designer: AAF, handles and production sound"
titolo_seo: "What to deliver to your sound designer: AAF, handles and production sound | Riccardo Vojvoda"
descrizione_seo: "The list of materials needed to start audio post-production on a video: reference video, AAF with handles, original production sound, music and a three-line brief. With the most common mistakes."
date: 2026-09-22
bozza: true
chiave: articolo-s01
categoria: Deliverables
per_chi: ["montatore", "regista-produzione"]
argomento: ["consegna-materiali"]
copertina: montaggio-timeline-consegna-audio.jpg
copertinaAlt: "Control surface in an audio post-production studio"
copertinaCredito: "Photo: pxhere, CC0"
tags: ["approfondimenti_en", "AAF", "OMF", "handles", "production sound", "audio post-production", "Premiere Pro", "DaVinci Resolve", "Pro Tools", "deliverables sound design"]
---
The edit is locked, the client has approved, and now the video has to go "to audio". At this point the same question always comes up: what do I send you? The short answer is: five things. Below is the list, with the reason behind each item and the mistakes that waste the most time.

## 1. The reference video

You need a video file that is exactly the approved edit, with these characteristics:

- **Same frame rate as the project** (25, 24, 23.976, 30: whatever you use, with no conversions).
- **Visible burnt-in timecode** and a start timecode that matches the timeline, for example 01:00:00:00. Without it, every note like "the noise at 2 minutes 14" becomes a search.
- **Reduced resolution**: an H.264 at 1080p or a ProRes Proxy is enough. The 4K master is ten times heavier and does not look any better in the audio suite.
- **The edit's audio inside the file**, mixed the way you hear it. It is the reference for what you had in mind, not the working material.

## 2. The AAF, with handles

The AAF (Advanced Authoring Format) is the file that carries the audio timeline from the editing software to the post-production software, with cuts, positions, clip names and levels. What to set on export:

- **Embedded audio**, not linked: everything arrives in a single file.
- **Handles of at least 5 seconds** (120 frames at 24 fps, 125 at 25 fps). Handles are the pieces of audio before and after each cut: they are used to extend a clip, soften an attack, fill a gap. Without handles every cut is a wall.
- **48 kHz, 24 bit**, no conversions.
- **No effects "baked in"**: if you added an EQ or a noise reducer during editing, switch it off before exporting. Clip volume and fades are fine, they are read correctly.
- **Tidy tracks**: dialogue on top, then effects, then music. Not mandatory, but it saves an hour.
- **Separate mono tracks**: in Premiere, "linked" stereo tracks that actually contain two identical mono channels (typical of wireless mics) should be broken out to mono.

If your software also offers OMF: skip it. It is the old format, it has a 2 GB limit and loses information. **Always AAF.**

DaVinci Resolve, Premiere Pro, Avid Media Composer and Final Cut Pro (via X2Pro) can all export an AAF. If you are unsure about the settings, ask before exporting: a two-line answer saves doing it twice.

## 3. The original production sound

If the video was shot with a location sound mixer, you need **the original recorder folders**, not just the audio inside the AAF. The reason: the AAF usually holds one channel (or a mix) per clip, while the original files contain every microphone separately, the boom, the wireless mics, the metadata with scene and take names, and the **sound report** with the mixer's notes. That is where the clean voice is recovered when the wrong channel ended up in the edit, and it happens often.

If you shot without a sound mixer, with camera audio or a separate recorder, send all the audio footage anyway, as it is, in a folder with the date.

## 4. The music and its licence

For every chosen track: **the full-quality file** (WAV or AIFF, not the MP3 downloaded for the test) and **the licence** or the catalogue reference. If a piece of music is temporary, say so: temp music is the first thing everyone gets attached to and the last thing anyone manages to replace. If the track still has to be chosen, this is the right moment to say it.

## 5. A three-line brief

No document needed. This information is enough:

- **Where the video goes**: TV, cinema, website, social, trade show. It changes the delivery format and the loudness level.
- **What format you want back**: stereo, 5.1, separate stems (dialogue, music, effects), versions in several languages.
- **When it is needed** and how many rounds of revisions you have planned.

<div class="riquadro">
<p><strong>The list in short.</strong> Reference video with timecode · embedded AAF with 5-second handles · original production sound with the sound report · music as WAV with licence · destination, format, date.</p>
</div>

## The mistakes that cost the most time

1. **The edit changes after delivery.** Every change to the video after the AAF has been sent means realigning all the work by hand (the jargon word is reconform). Better one more day of waiting than a fake picture lock.
2. **AAF without handles.** It shows at the first cut and you go back.
3. **Different frame rate between video and AAF.** Everything slips by a few frames and the dialogue ends up out of sync.
4. **Different start timecode** between the video and the timeline.
5. **Music as MP3** or, worse, the file downloaded from YouTube.
6. **Audio effects already applied** in the AAF: the editing suite's noise reducer can no longer be removed.

If one of these has already happened, it is not the end of the world: it gets fixed. But it is an extra day in the quote, and it is better to know beforehand.

## Not sure how to export?

Write to me before doing it. I will send you the settings for your software, so the export is done once.
