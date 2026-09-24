---
titolo: "Comment exporter l'AAF pour la post-production audio depuis Premiere Pro, DaVinci Resolve, Avid et Final Cut Pro"
titolo_seo: "Comment exporter l'AAF pour la post-production audio depuis Premiere, Resolve, Avid et Final Cut | Riccardo Vojvoda"
descrizione_seo: "Les réglages d'export AAF pour Pro Tools, logiciel par logiciel : audio incorporé, poignées, 48 kHz 24 bits, effets désactivés. Premiere Pro, DaVinci Resolve, Avid Media Composer et Final Cut Pro avec X2Pro."
date: 2026-09-24
copertina: export-aaf-resolve-render-settings.jpg
copertinaAlt: "Réglages de rendu pour l'AAF : preset AVID AAF, poignées de 125 images, pistes audio séparées"
copertinaCredito: "Capture d'écran : DaVinci Resolve"
chiave: articolo-s41
categoria: Livraison des éléments
per_chi: ["montatore", "regista-produzione"]
argomento: ["consegna-materiali"]
tags: ["approfondimenti_fr", "AAF", "poignées", "Premiere Pro", "DaVinci Resolve", "Avid Media Composer", "Final Cut Pro", "X2Pro", "Pro Tools", "post-production audio", "livraison éléments sound design"]
---
Les réglages qui comptent sont les mêmes dans tous les logiciels de montage : audio incorporé dans le fichier, poignées d'au moins 5 secondes, 48 kHz en 24 bits, effets audio non rendus. Seul l'emplacement des options dans les menus change.

## Avant d'exporter, dans n'importe quel logiciel

- **Dupliquer la séquence** et travailler sur la copie : on peut retirer la vidéo et réordonner les pistes sans toucher au montage.
- **Pistes ordonnées** : dialogues en haut, puis effets, puis musiques. Elles arrivent dans Pro Tools dans le même ordre.
- **Séquences imbriquées, multicam et clips fusionnés** (nested, multicam, merged clips) : il faut les aplatir avant. Dans l'AAF, une séquence imbriquée devient un mixdown stéréo, pas les clips individuels.
- **Pas de changements de vitesse** sur les clips audio : ils se perdent ou arrivent faux. S'ils sont nécessaires, mieux vaut les rendre dans un nouveau fichier.
- **Noms de clips et de pistes sans caractères spéciaux** (`/ < > & @ ®` et les lettres accentuées) : c'est la cause la plus fréquente d'AAF qui ne s'ouvrent pas.
- **Timecode de départ** de la séquence identique à celui de la vidéo de référence (par exemple 01:00:00:00).

## Premiere Pro

`File > Export > AAF` (les libellés ci-dessous sont ceux de la version anglaise ; en français ils sont traduits, dans le même ordre).

- **Mixdown Video** : non. La vidéo de référence s'exporte à part.
- **Breakout to Mono** : oui. Chaque canal va sur une piste mono séparée et Pro Tools les lit sans conversion. C'est surtout utile quand les clips stéréo sont en réalité deux micros différents, par exemple la perche à gauche et le micro HF à droite.
- **Enable (rendering) / Render audio clip effects** : **non**. Les effets de clip ne passent pas dans Pro Tools : s'ils sont rendus, l'égaliseur ou le réducteur de bruit restent imprimés dans le fichier. Si le rendu sert à faire entendre l'intention, cocher aussi "Include clip copies without effects" : deux pistes arrivent par clip, une "FX" et une "No FX".
- **Save as legacy AAF** : non.
- **Embed Audio** : oui, un seul fichier. "Separate Audio" ne convient que s'il faut conserver les métadonnées de l'enregistreur du son direct (workflow field recorder) : dans ce cas cocher aussi "Preserve media directory name".
- **Format** : Broadcast Wave.
- **Render** : "Trim Audio Files" avec **Handle Frames** à 120 ou plus (5 secondes à 24 i/s ; 125 à 25 i/s). "Copy Complete Audio Files" copie les fichiers entiers : plus lourd, mais les poignées sont là par définition.
- **Bits per sample** : 24. **Sample rate** : 48 kHz.

Le volume des clips, les images clés de volume et les fondus sont lus par Pro Tools. Les pistes 5.1 et adaptatives, mieux vaut les convertir en pistes standard avant.

## DaVinci Resolve

L'AAF pour Pro Tools s'exporte depuis la page **Deliver**, avec le preset **Pro Tools** parmi les presets de rendu en haut. `File > Export > AAF, XML` produit un AAF générique qui s'ouvre mal dans Pro Tools.

- **Video** : "Export Video" désactivé, si la vidéo de référence s'exporte à part. Le format du panneau vidéo décide quand même le type de fichier audio : QuickTime = Broadcast Wave, MXF OP-Atom = MXF.
- **Audio > Codec** : **Embedded in AAF** pour un fichier unique. "Linear PCM" produit un AAF avec les fichiers audio dans un dossier à part.
- **Render one track per channel** : laisser coché, fichiers mono.
- **Add X frame handles** : cocher et mettre 120 images ou plus (à 25 i/s : 125 = 5 secondes).
- **48 kHz, 24 bits** dans le panneau audio.
- **Effets Fairlight** (EQ, compresseurs, FairlightFX, Elastic Wave) : ils ne sont ni exportés ni imprimés. Si un effet doit arriver, il faut le rendre dans le clip avant ("bounce" ou render in place).
- Puis "Add to Render Queue" et "Render All".

Deux points propres à Resolve : les **clips désactivés sont exportés quand même**, et arrivent actifs dans Pro Tools (mieux vaut les supprimer) ; et dans `Preferences > User > Editing` il vaut mieux activer **"Align audio edits to frame boundaries"**, sinon les coupes sous l'image peuvent se décaler.

## Avid Media Composer

`File > Output > Export to File`, puis "Options" et "Export As: AAF".

- **Include All Audio Tracks in Sequence** : oui. Les pistes vidéo peuvent être exclues.
- **Audio Details > Export Method** : **Consolidate Media**, avec **Handle Length** à 120 images ou plus. "Link to (Don't Export) Media" produit un AAF sans audio : il ne s'ouvre que sur une machine qui voit les mêmes médias.
- **Render All Audio Effects** / **Include Rendered Audio Effects** : désactivés. Les effets de piste (inserts) apparaissent dans Pro Tools comme inserts et ne sonnent pas.
- **Convert Audio Sample Rate to Project / Bit Depth to Project** : 48 kHz et 24 bits. **Convert Audio File Format** : WAVE.
- **Media Destination** : **Embedded in AAF**.
- Les fondus arrivent comme fondus en temps réel (à partir de Pro Tools 12.6), le volume des clips aussi.

## Final Cut Pro

Final Cut n'exporte pas d'AAF. La voie standard est **X2Pro Audio Convert** (Mac App Store, Marquis Broadcast) :

1. Dans Final Cut, `File > Export XML` du projet.
2. Dans X2Pro, ouvrir le XML et dans l'onglet **Roles** choisir quels rôles inclure et dans quel ordre : chaque rôle devient un groupe de pistes (dialogues, effets, musique), avec "Keep sub-roles separate" activé. C'est pourquoi il vaut la peine d'attribuer les rôles avec soin dans Final Cut avant d'exporter.
3. Régler les **poignées** (5 secondes) et l'audio **embedded**, puis convertir. Volume, images clés et fondus passent.

Alternative gratuite : importer le XML dans DaVinci Resolve et utiliser le preset Pro Tools de la page Deliver comme ci-dessus. Les clips composés (compound clips) doivent être décomposés avant l'export XML dans les deux cas.

## À livrer avec l'AAF

- La **vidéo de référence** avec la même cadence d'images et le même timecode de départ (H.264 1080p ou ProRes Proxy), si possible avec le timecode incrusté.
- Un **mix de référence** en WAV, c'est-à-dire l'audio tel qu'on l'entend au montage : il sert à comprendre l'intention et à vérifier la synchro à l'import.
- S'il existe, le dossier avec les fichiers du **son direct original** et le rapport son : ce qu'il faut au-delà de l'AAF se trouve dans [Que livrer au sound designer](/fr/guides/que-livrer-au-sound-designer-export-video-aaf-son-direct/).

<div class="riquadro">

**En bref.** Copie de la séquence sans nested/multicam · audio incorporé · poignées de 120+ images · Broadcast Wave 48 kHz 24 bits · effets audio non rendus · vidéo de référence avec le même timecode.

</div>

## Un test avant la vraie livraison

Sur un projet long, mieux vaut exporter un AAF de 30 secondes quelques jours avant le verrouillage de l'image et me l'envoyer : s'il y a un problème de réglages, on le voit tout de suite et on le règle avant, pas le jour de la livraison. Je le vérifie volontiers.

## Sources

<p class="fonti">Production Expert, "How To Create A Pro Tools Friendly AAF" pour Adobe Premiere, DaVinci Resolve et Avid Media Composer (production-expert.com) · Avid Knowledge Base, "Media Composer AAF Audio Export Options for Pro Tools" (kb.avid.com) · Blackmagic Design, DaVinci Resolve Reference Manual, page Deliver, preset Pro Tools · Marquis Broadcast, X2Pro Audio Convert, guide de conversion (x2pro.net) · Adobe, "Exporter des fichiers AAF", guide de Premiere Pro (helpx.adobe.com).</p>
