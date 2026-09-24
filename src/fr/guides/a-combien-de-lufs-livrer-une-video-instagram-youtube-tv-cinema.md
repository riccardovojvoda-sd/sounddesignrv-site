---
titolo: "À combien de LUFS livrer une vidéo ? Instagram, YouTube, TV et cinéma comparés"
titolo_seo: "À combien de LUFS livrer une vidéo ? Instagram, YouTube, TV et cinéma | Riccardo Vojvoda"
descrizione_seo: "Les niveaux de loudness pour chaque destination d'une vidéo : -14 LUFS pour YouTube et les réseaux sociaux, -23 LUFS pour la TV (EBU R128), -27 LKFS dialogues pour Netflix, salle calibrée au cinéma. Avec le true peak et ce que les plateformes font au fichier."
date: 2026-09-24
copertina: lufs-video-loudness-resolve.jpg
copertinaAlt: "Loudness meter avec le preset YouTube : loudness intégrée à -14 LUFS et true peak à -1,7 dBTP"
copertinaCredito: "Capture d'écran : Fairlight, DaVinci Resolve"
chiave: articolo-s02
categoria: Mixage et loudness
per_chi: ["montatore", "regista-produzione", "agenzia"]
argomento: ["mix-loudness"]
tags: ["approfondimenti_fr", "LUFS", "loudness", "EBU R128", "true peak", "YouTube", "Instagram", "TikTok", "Netflix", "spot TV", "mixage pour les réseaux sociaux", "post-production audio"]
---
Le LUFS (Loudness Unit Full Scale) mesure le niveau sonore perçu d'un programme dans son ensemble, pas la hauteur de son pic. C'est le chiffre que les plateformes et les chaînes utilisent pour décider de combien monter ou baisser une vidéo, et c'est donc la première chose à connaître avant de finaliser le mix. Les valeurs ci-dessous sont celles en vigueur en septembre 2026.

## Le tableau

| Destination | Loudness intégrée | True peak | Qui le dit |
|---|---|---|---|
| YouTube | -14 LUFS | -1 dBTP | YouTube |
| Instagram, Facebook, TikTok | -14 LUFS (estimation) | -1 dBTP | aucune valeur officielle |
| Site web, salon, présentation | -16 / -14 LUFS | -1 dBTP | usage courant |
| TV et spots TV en Europe | -23 LUFS (±0,5 LU) | -1 dBTP | EBU R128 |
| TV aux États-Unis | -24 LKFS | -2 dBTP | ATSC A/85 |
| Netflix | -27 LKFS (±2) sur les dialogues | -2 dBTP | Netflix |
| Podcast (Apple) | -16 LUFS | -1 dBTP | Apple |
| Cinéma | pas de cible LUFS : salle calibrée | | Dolby / SMPTE |

LUFS et LKFS sont la même unité sous deux noms (européen et américain). Le dBTP est le true peak, le pic réel du signal après la conversion numérique-analogique : il se mesure avec un true peak meter, pas avec le peak meter habituel.

## YouTube : -14 LUFS, et il ne fait que baisser

YouTube normalise à environ -14 LUFS. Une vidéo plus forte est baissée ; une vidéo plus faible n'est **pas** montée. Donc un mix à -20 LUFS sonne plus bas que tous les autres sur YouTube, et un mix à -9 LUFS est ramené à -14 avec pour seul résultat d'avoir perdu de la dynamique. Le niveau utile est -14 avec les pics à -1 dBTP. La valeur appliquée se lit dans le lecteur, clic droit > "Statistiques avancées", à la ligne "Volume / Normalized".

## Instagram, Facebook, TikTok : aucun chiffre officiel

Meta et TikTok ne publient pas de cible. Meta réencode l'audio en xHE-AAC avec une gestion adaptative du volume, qui change selon le contexte de lecture ; les mesures faites par ceux qui y travaillent se regroupent autour de -14 LUFS. TikTok ne normalise pas dans le fil, en juillet 2026 : un fichier plus fort sonne vraiment plus fort, avec la compression que cela implique.

La valeur défendable pour un reel ou un spot social est **-14 LUFS, pics à -1 dBTP**. Si un brief demande "plus fort", on peut monter à -12 en sachant qu'on renonce à de la dynamique, pas qu'on respecte une spécification. À garder en tête : la plateforme recompresse de toute façon le fichier (AAC à bas débit) ; les pics à -1 dBTP servent à ne pas saturer à cette étape.

## Site web, salons, présentations

Il n'y a pas de normalisation : le fichier sonne exactement comme il a été livré. -16 LUFS est le niveau qui fonctionne aussi bien au casque que sur un ordinateur portable ; -14 si la vidéo vit à côté de contenus sociaux. Sur un écran de salon avec ses propres enceintes, c'est le système qui décide du volume, et un mix avec la voix devant compte plus que le chiffre.

## TV et spots TV : EBU R128

En Europe, Italie et France comprises, les chaînes appliquent la recommandation **EBU R128** : loudness intégrée **-23 LUFS**, tolérance ±0,5 LU (±1 LU pour le direct), true peak maximum **-1 dBTP**. Pour les spots et les contenus courts s'applique aussi la limite de loudness à court terme (short-term) à **-18 LUFS**, pour qu'un spot ne puisse pas sonner plus fort que le programme dans lequel il est inséré. Un fichier hors tolérance est refusé ou renormalisé à la diffusion, et dans le second cas personne ne contrôle le résultat.

Chaque chaîne a ses propres spécifications de livraison (format, pistes, configuration audio) : mieux vaut les demander avant de mixer, pas après.

## Netflix et les plateformes de streaming

Netflix mesure la loudness **sur les dialogues** (dialog-gated) et demande **-27 LKFS ±2**, true peak **-2 dBTP**. Amazon Prime Video demande -24 LKFS ±2 sur le programme entier, avec le même true peak ; Apple TV+ et Disney+ ont chacune leur propre document de livraison. Ces niveaux sont bien plus bas que ceux des réseaux sociaux parce que la mesure est différente (seulement la parole) et parce que l'écoute se fait dans une pièce, pas au casque dans le métro.

## Cinéma : pas de LUFS, la salle est calibrée

En salle il n'y a pas de normalisation : le projecteur lit le fichier au niveau de calibration standard (85 dB SPL à -20 dBFS par canal, le "fader à 7" Dolby). Le mix se juge donc dans une salle calibrée de la même façon et c'est le mix lui-même qui décide du niveau ; un film mixé au casque à -14 LUFS est assourdissant en salle. Pour les bandes-annonces il existe un plafond à part, le **Leq(m) 85 dB** (TASA), mesuré avec une pondération différente des LUFS. En pratique, un mix cinéma se fait ou se vérifie dans une salle calibrée, et la question des LUFS ne se pose que lorsqu'on prépare la version streaming ou TV du même film.

## Un seul mix pour toutes les destinations ?

Non : entre -14 et -23 LUFS il y a 9 LU d'écart, presque le double du volume perçu. La méthode est :

1. Mixer **une fois** au niveau de la destination principale, en général la plus exigeante (TV ou streaming).
2. Dériver les autres versions de ce mix en changeant seulement le niveau et le limiteur, en vérifiant le true peak sur chaque version.
3. Livrer chaque fichier avec un nom qui dit à quoi il sert (`_TV_R128`, `_web_-14`), pour que personne ne mette en ligne le mauvais.

Un mix né à -14 LUFS ne se ramène pas à -23 simplement en le baissant : la compression déjà imprimée reste. L'inverse, en revanche, fonctionne.

<div class="riquadro">

**En bref.** YouTube et réseaux sociaux -14 LUFS / -1 dBTP · web et salons -16 / -14 · TV européenne -23 LUFS / -1 dBTP avec short-term maximum -18 pour les spots · Netflix -27 LKFS sur les dialogues / -2 dBTP · cinéma salle calibrée, bandes-annonces Leq(m) 85.

</div>

## Ce qu'il faut pour la vérification

Le fichier final et la liste des destinations suffisent. La mesure de la loudness intégrée, du true peak et du short-term prend quelques minutes et donne un rapport pour chaque version. Si la vidéo doit aller à plusieurs endroits, mieux vaut m'écrire avant le mix final : on décide le niveau de départ et les versions sortent toutes ensemble.

## Sources

<p class="fonti">EBU R 128 v5.0, "Loudness normalisation and permitted maximum level of audio signals" et supplément s2 sur les contenus courts (tech.ebu.ch) · ATSC A/85, "Techniques for Establishing and Maintaining Audio Loudness for Digital Television" · Netflix Partner Help Center, "Sound Mix Specifications and Best Practices" · Amazon Video Central, spécifications audio · Apple Podcasts for Creators, "Audio requirements" · Forasoft, "LUFS targets per platform in 2026" (forasoft.com), pour Meta xHE-AAC et TikTok sans normalisation · TASA, Trailer Audio Standards (Leq(m) 85) · Dolby, calibration de la salle à 85 dB SPL.</p>
