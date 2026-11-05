---
titolo: "What to deliver to your sound designer: video export, AAF and production sound"
parola_evidenziata: "sound designer"
titolo_seo: "What to deliver to your sound designer: video export, AAF and production sound | Riccardo Vojvoda"
descrizione_seo: "The list of materials needed to start audio post-production on a video: reference video, AAF with handles, original production sound, music and a three-line brief. With the most common mistakes."
date: 2026-09-22
chiave: articolo-s01
categoria: Deliverables
per_chi: ["montatore", "regista-produzione"]
argomento: ["consegna-materiali"]
copertina: montaggio-timeline-consegna-audio.jpg
copertinaAlt: "Video editing timeline with audio tracks on a monitor"
copertinaCredito: "Photo: Bas Peperzak, Unsplash"
tags: ["approfondimenti_en", "AAF", "OMF", "handles", "production sound", "audio post-production", "Premiere Pro", "DaVinci Resolve", "Pro Tools", "deliverables sound design"]
domande_faq:
  - d: "What should I deliver to the sound designer once the edit is locked?"
    r: "The reference video with the approved edit, the AAF with embedded audio and handles, the original production sound with the sound report, the music in full quality with its licence, and a short brief with destination, delivery format and deadline."
  - d: "What are handles in an AAF and how long should they be?"
    r: "Handles are the working margin of the audio clips before and after every cut. They are used to extend a clip, soften an attack, cover a gap or adjust a crossfade, and should be at least 5 seconds: 120 frames at 24 fps, 125 at 25 fps."
  - d: "Is AAF or OMF better for audio post-production?"
    r: "Always AAF. OMF is the old format, it has a 2 GB limit and loses information, while the AAF carries cuts, positions, clip names and levels."
  - d: "Do I need to deliver the original production sound as well as the AAF?"
    r: "Yes, if the video was shot with a sound mixer. The original recorder files may contain alternate takes useful for replacing small mistakes, and the sound report with the mixer's notes holds the information about what was recorded."
  - d: "Which mistakes waste the most time when delivering audio materials?"
    r: "An edit that changes after the AAF has been sent, which forces a realignment (reconform), an AAF without handles, a different frame rate or start timecode between video and AAF, music as MP3 and audio effects already applied in the AAF."
---
The edit is locked, the client has approved, and now the video has to go "to audio". At this point the same question always comes up: what do I send? Below is the list, with the reason behind each item and the mistakes that waste the most time.

<div class="riquadro">

**The short answer.** Reference video with timecode · embedded AAF with 5-second handles · original production sound with sound report · music in WAV with licence · destination, format, date, any references.

</div>

## 1. The reference video

A video file that is exactly the approved edit, with these characteristics:

- **Same frame rate as the project** (25, 24, 23.976, 30: whatever the project uses, no conversions).
- **Reduced resolution**: an H.264 at 1080p or a ProRes Proxy is enough. The 4K master is not needed.
- **The edit's audio inside the file**, mixed as it sounds in the edit.
- (Optional) Visible burnt-in timecode and a start timecode equal to the timeline's, for example 01:00:00:00.

## 2. The AAF, with handles

The AAF (Advanced Authoring Format) is the file that carries the audio timeline from the editing software to the post-production one, with cuts, positions, clip names and levels. What to set on export:

- Preferably **with embedded audio**, not linked: everything arrives in a single file.
- **Handles of at least 5 seconds** (120 frames at 24 fps, 125 at 25 fps). Handles are the working margin of each audio clip, before and after every cut: they are used to extend a clip, soften an attack, cover a gap, adjust a crossfade.
- **48 kHz, 24 bit**, no conversions.
- **No audio effects baked into the files**: editing effects (EQ, noise reduction) do not travel in the AAF, but Premiere and Avid have an export option that renders them into the audio files ("Render audio clip effects" in Premiere). Leave it off. Clip volume and fades are fine, they carry over.
- **Ordered tracks**: dialogue on top, then effects, then music. Not mandatory, but it saves an hour.

If the software also offers OMF: better to skip it. It is the old format, it has a 2 GB limit and loses information. **Always AAF.**

DaVinci Resolve, Premiere Pro, Avid Media Composer and Final Cut Pro (via X2Pro) all export AAF. If there is any doubt about the settings, feel free to ask me before exporting.

## 3. The original production sound

If the video was shot with a production sound mixer, the **original recorder folders** are needed, not just the audio that sits in the AAF. The reason: the original files may contain alternate takes, useful for replacing small mistakes or recovering similar material that matches the production sound.

On bigger productions the **sound report** with the mixer's notes is essential: it holds all the information about what was recorded.

If the shoot had no sound mixer, with camera audio or a separate recorder, all the audio footage may still be requested.

## 4. The music and its licence

For each chosen track: **the full-quality file** (WAV or AIFF, not the MP3 downloaded for the test) and **the licence** or the catalogue reference.

## 5. A three-line brief

These are enough:

- **Reference videos** for look, style, technical approach (ads, films, documentaries etc.).
- **Where the video goes**: TV, cinema, website, social, trade show. It changes the delivery format and the loudness level.
- **The delivery format**: stereo, 5.1, separate stems (dialogue, music, effects), versions in several languages.
- **Deadline.**

## The mistakes that cost the most time

1. **The edit changes after delivery.** Every change to the video after the AAF has been sent means realigning all the work done by hand (in jargon: reconform). Better one extra day of waiting than a fake picture lock.
2. **AAF without handles.** If a badly cut portion is needed, the original take has to be resynced by hand.
3. **Different frame rate between video and AAF.** Everything drifts by a few frames and the dialogue ends up out of sync.
4. **Different start timecode** between the video and the timeline.
5. **Music as MP3.**
6. **Audio effects already applied** in the AAF: the edit's noise reduction cannot be removed any more.

If one of these has already happened, it is not the end of the world: it gets fixed. But it can cost an extra day of work.

## Not sure how to export?

Better to write to me first: I send the settings for the software in use, so the export is done once.
