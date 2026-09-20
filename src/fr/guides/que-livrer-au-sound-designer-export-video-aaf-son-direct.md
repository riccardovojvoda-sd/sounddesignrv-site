---
titolo: "Que livrer au sound designer : export vidéo, AAF et son direct"
titolo_seo: "Que livrer au sound designer : export vidéo, AAF et son direct | Riccardo Vojvoda"
descrizione_seo: "La liste des éléments nécessaires pour démarrer la post-production audio d'une vidéo : vidéo de référence, AAF avec poignées, son direct original, musiques et un brief de trois lignes. Avec les erreurs les plus fréquentes."
date: 2026-09-22
bozza: true
chiave: articolo-s01
categoria: Livraison des éléments
per_chi: ["montatore", "regista-produzione"]
argomento: ["consegna-materiali"]
copertina: montaggio-timeline-consegna-audio.jpg
copertinaAlt: "Surface de contrôle dans un studio de post-production audio"
copertinaCredito: "Photo : pxhere, CC0"
tags: ["approfondimenti_fr", "AAF", "OMF", "poignées", "son direct", "post-production audio", "Premiere Pro", "DaVinci Resolve", "Pro Tools", "livraison éléments sound design"]
---
Le montage est verrouillé, le client a validé, et la vidéo doit maintenant passer « en son ». À ce moment-là, la même question revient toujours : qu'est-ce que j'envoie ? Voici la liste, avec la raison de chaque élément et les erreurs qui font perdre le plus de temps.

## 1. La vidéo de référence

Un fichier vidéo qui correspond exactement au montage validé, avec ces caractéristiques :

- **Même cadence d'images que le projet** (25, 24, 23,976, 30 : celle du projet, sans conversion).
- **Résolution réduite** : un H.264 en 1080p ou un ProRes Proxy suffit. Le master 4K n'est pas nécessaire.
- **L'audio du montage dans le fichier**, mixé tel qu'on l'entend au montage.
- (Facultatif) Timecode incrusté à l'image et timecode de départ identique à celui de la timeline, par exemple 01:00:00:00.

## 2. L'AAF, avec les poignées

L'AAF (Advanced Authoring Format) est le fichier qui transporte la timeline audio du logiciel de montage vers celui de post-production, avec les coupes, les positions, les noms des clips et les niveaux. Les réglages à l'export :

- De préférence **avec l'audio incorporé** (embedded), pas lié : tout arrive dans un seul fichier.
- **Poignées d'au moins 5 secondes** (120 images à 24 ips, 125 à 25 ips). Les poignées sont la marge de travail de chaque clip audio, avant et après chaque coupe : elles servent à allonger un clip, adoucir une attaque, couvrir un trou, retravailler un crossfade.
- **48 kHz, 24 bits**, sans conversion.
- **Aucun effet audio imprimé dans les fichiers** : les effets de montage (égaliseur, réduction de bruit) ne voyagent pas dans l'AAF, mais Premiere et Avid ont une option d'export qui les rend dans les fichiers audio (« Render audio clip effects » dans Premiere). À laisser désactivée. Le volume des clips et les fondus, en revanche, passent bien.
- **Pistes ordonnées** : dialogues en haut, puis effets, puis musiques. Pas obligatoire, mais cela fait gagner une heure.

Si le logiciel propose aussi l'OMF : mieux vaut s'en passer. C'est l'ancien format, limité à 2 Go, et il perd des informations. **Toujours l'AAF.**

DaVinci Resolve, Premiere Pro, Avid Media Composer et Final Cut Pro (via X2Pro) exportent tous en AAF. En cas de doute sur les réglages, n'hésitez pas à me demander avant d'exporter.

## 3. Le son direct original

Si la vidéo a été tournée avec un ingénieur du son, il faut **les dossiers originaux de l'enregistreur**, pas seulement l'audio contenu dans l'AAF. La raison : les fichiers originaux peuvent contenir des prises alternatives, utiles pour remplacer de petites erreurs ou récupérer du matériel similaire, cohérent avec le son de production.

Sur les grosses productions, le **rapport son** avec les notes de l'ingénieur est essentiel : on y retrouve toutes les informations sur ce qui a été enregistré.

Si le tournage s'est fait sans ingénieur du son, avec l'audio de la caméra ou un enregistreur à part, il est possible que tout l'audio tourné soit quand même demandé.

## 4. Les musiques et leur licence

Pour chaque morceau choisi : **le fichier en pleine qualité** (WAV ou AIFF, pas le MP3 téléchargé pour l'essai) et **la licence** ou la référence du catalogue.

## 5. Un brief de trois lignes

Ces informations suffisent :

- **Vidéos de référence** esthétiques, stylistiques, techniques (pubs, films, documentaires, etc.).
- **Où va la vidéo** : TV, cinéma, site, réseaux sociaux, salon. Cela change le format de livraison et le niveau de loudness.
- **Le format de livraison** : stéréo, 5.1, stems séparés (dialogues, musique, effets), versions en plusieurs langues.
- **Deadline.**

<div class="riquadro">

**La liste en bref.** Vidéo de référence avec timecode · AAF incorporé avec poignées de 5 secondes · son direct original avec rapport son · musiques en WAV avec licence · destination, format, date, éventuelles références.

</div>

## Les erreurs qui coûtent le plus de temps

1. **Le montage change après la livraison.** Toute modification de la vidéo après l'envoi de l'AAF oblige à réaligner à la main tout le travail effectué (en jargon : reconform). Mieux vaut un jour d'attente de plus qu'un faux picture lock.
2. **AAF sans poignées.** S'il faut une portion mal coupée, il faut obligatoirement resynchroniser la prise originale.
3. **Cadence d'images différente entre la vidéo et l'AAF.** Tout glisse de quelques images et les dialogues finissent désynchronisés.
4. **Timecode de départ différent** entre la vidéo et la timeline.
5. **Musique en MP3.**
6. **Effets audio déjà appliqués** dans l'AAF : la réduction de bruit du montage ne s'enlève plus.

Si l'une de ces choses est déjà arrivée, ce n'est pas la fin du monde : ça se règle. Mais cela peut coûter une journée de travail en plus.

## Un doute sur l'export ?

Mieux vaut m'écrire avant : j'envoie les réglages pour le logiciel utilisé, et l'export se fait une seule fois.
