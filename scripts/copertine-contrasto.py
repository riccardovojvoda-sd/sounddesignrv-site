#!/usr/bin/env python3
"""Curva di contrasto comune per le copertine delle guide (src/assets/img/approfondimenti).

Regola: neri veri e bianchi pieni, così la copertina regge sia sul fondo chiaro sia nel tema scuro
(fondo #2F302C: una copertina con i neri grigi ci si confonde). Niente bande nere ai bordi.
Vale per le foto. Gli screenshot di programmi (in SCREENSHOT) restano come sono: alzarne il contrasto
schiarisce il grigio dell'interfaccia e la confonde col fondo scuro.
Misura sulla luminanza:
  - punto del nero (percentile 2)      <= 12
  - punto del bianco (percentile 99.5) >= 215
Uso:
  python3 scripts/copertine-contrasto.py                        controlla tutte, segnala quelle fuori regola
  python3 scripts/copertine-contrasto.py --correggi file.jpg    porta i livelli in regola
La correzione lavora solo sulla luminosità (i colori restano gli stessi, niente dominanti):
taglia le bande nere ai bordi, nero al percentile 2 -> 3, bianco al percentile 99.5 -> 238,
mezzitoni con gamma 0.8 perché le ombre non si chiudano.
"""
import sys, glob, os
import numpy as np
from PIL import Image

CARTELLA = os.path.join(os.path.dirname(__file__), "..", "src/assets/img/approfondimenti")
NERO_MAX, BIANCO_MIN = 12, 215
NERO_OUT, BIANCO_OUT, GAMMA = 3, 238, 0.8
PESI = [0.299, 0.587, 0.114]
SCREENSHOT = {"lufs-video-loudness-resolve.jpg", "export-aaf-resolve-render-settings.jpg"}

def luminanza(im):
    return np.asarray(im.convert("RGB"), float) @ PESI

def bande_nere(L):
    """Pixel di banda quasi nera a sinistra, destra, sopra, sotto."""
    def conta(medie):
        n = 0
        while n < len(medie) // 10 and medie[n] < 4:
            n += 1
        return n
    return conta(L.mean(0)), conta(L.mean(0)[::-1]), conta(L.mean(1)), conta(L.mean(1)[::-1])

def correggi(percorso):
    im = Image.open(percorso).convert("RGB")
    w, h = im.size
    s, d, a, b = bande_nere(luminanza(im))
    if s or d or a or b:
        # taglia le bande e conserva il formato ritagliando anche l'altro lato
        x0, x1, y0, y1 = s + 2 if s else 0, w - (d + 2 if d else 0), a + 2 if a else 0, h - (b + 2 if b else 0)
        nw, nh = x1 - x0, y1 - y0
        if nw / nh > w / h:
            taglio = nw - round(nh * w / h); x0 += taglio // 2; x1 -= taglio - taglio // 2
        else:
            taglio = nh - round(nw * h / w); y0 += taglio // 2; y1 -= taglio - taglio // 2
        im = im.crop((x0, y0, x1, y1)).resize((w, h), Image.LANCZOS)
    rgb = np.asarray(im, float)
    L = rgb @ PESI
    nero, bianco = np.percentile(L, [2, 99.5])
    t = np.clip((L - nero) / (bianco - nero), 0, 1) ** GAMMA
    nuova = NERO_OUT + t * (BIANCO_OUT - NERO_OUT)
    out = np.clip(rgb * (nuova / np.maximum(L, 1))[..., None], 0, 255)
    Image.fromarray(out.round().astype("uint8")).save(percorso, quality=85, optimize=True, progressive=True)
    print(f"corretta {os.path.basename(percorso)}: nero {nero:.0f}->{NERO_OUT}, bianco {bianco:.0f}->{BIANCO_OUT}, bande {s},{d},{a},{b}")

def controlla():
    fuori = 0
    for f in sorted(glob.glob(os.path.join(CARTELLA, "*.jpg"))):
        if os.path.basename(f) in SCREENSHOT:
            print(f"scr   {os.path.basename(f)}: screenshot, esclusa")
            continue
        L = luminanza(Image.open(f))
        nero, mediana, bianco = np.percentile(L, [2, 50, 99.5])
        bande = bande_nere(L)
        ok = nero <= NERO_MAX and bianco >= BIANCO_MIN and not any(bande)
        fuori += not ok
        nota = f", bande nere {bande}" if any(bande) else ""
        print(f"{'ok   ' if ok else 'FUORI'} {os.path.basename(f)}: nero {nero:.0f}, mediana {mediana:.0f}, bianco {bianco:.0f}{nota}")
    return fuori

if __name__ == "__main__":
    if sys.argv[1:2] == ["--correggi"]:
        for p in sys.argv[2:]:
            correggi(p)
    else:
        sys.exit(1 if controlla() else 0)
