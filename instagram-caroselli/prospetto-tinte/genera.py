"""Prospetto delle tinte SDRV per argomento (27/10/2026). Secondo giro: solo Voce e parlato da scegliere,
le altre sei approvate da Riccardo e mostrate per confronto."""
import colorsys, glob, json, os, shutil
SITO = os.path.expanduser("~/Library/CloudStorage/Dropbox/Code/sounddesignrv-site")
QUI = os.path.dirname(os.path.abspath(__file__))
T = json.load(open(f"{SITO}/instagram-caroselli/tinte-categorie.json"))["categorie"]
IMG = f"{SITO}/src/assets/img/approfondimenti"

FOTO = {  # foto e titolo d'esempio di una guida vera per argomento
    "consegna": ("montaggio-timeline-consegna-audio", "Cosa consegnare al sound designer"),
    "loudness": ("lufs-video-loudness-resolve", "A quanti LUFS consegnare un video"),
    "musica": ("musica-spot-radio-manopola", "Musica per uno spot radio"),
    "voce": ("voce-ai-speaker-microfono", "Voce AI o speaker vero per lo spot"),
    "set": ("bollettino-sonoro-cartellina-set", "Bollettino sonoro: cos'è e perché consegnarlo"),
    "sounddesign": ("foley-microfono-tavolo-studio", "Cos'è il foley e quando serve"),
    "brief": ("brief-sound-design-cuffie-scrivania", "Il brief per il sound design"),
}
APPROVATE = {"consegna": "Verde rame", "loudness": "Blu", "musica": "Arancione", "set": "Verde",
             "sounddesign": "Viola tenue", "brief": "Rosa"}
# lontane dall'arancione di Musica (24) e dalle altre approvate (140, 177, 215, 275, 345)
VOCE = [("Prugna", 318, .40), ("Indaco", 245, .45), ("Cremisi", 0, .62), ("Grafite", 210, .06)]


def rgb(h, l, s):
    r, g, b = colorsys.hls_to_rgb(h / 360, l, min(1, s)); return round(r * 255), round(g * 255), round(b * 255)


def velo(h, s, l):
    r, g, b = rgb(h, l, s); st = []
    for p in range(0, 101, 4):
        t = min(1, max(0, (p - 35) / 40)); a = 0.93 * t * t * (3 - 2 * t)
        st.append(f"rgba({r},{g},{b},{a:.3f}) {p}%")
    return "linear-gradient(180deg," + ",".join(st) + ")"


def copertina(k, h, s):
    c = T[k]; foto, titolo = FOTO[k]
    et = "#%02x%02x%02x" % rgb(h, c["etichetta"], s + .1)
    return (f'<div class="cop"><div class="sfondo" style="background-image:url(foto/{foto}.jpg)"></div>'
            f'<div class="velo" style="background:{velo(h, s, c["velo"])}"></div>'
            f'<div class="etichetta" style="color:{et}">GUIDA · {c["nome"].upper()}</div><div class="titolo">{titolo}</div>'
            f'<div class="piede"><span>sounddesignrv.com</span><span style="color:{et}">Scorri →</span></div></div>')


os.makedirs(f"{QUI}/foto", exist_ok=True)
for foto, _ in FOTO.values():
    piccole = sorted(glob.glob(f"{IMG}/{foto}-*w.jpg"), key=lambda f: abs(int(f.rsplit("-", 1)[1][:-5]) - 800))
    shutil.copy(piccole[0] if piccole else f"{IMG}/{foto}.jpg", f"{QUI}/foto/{foto}.jpg")

scelte = "".join(
    f'<label class="scelta"><input type="radio" name="voce" value="{n} (hue {h}, sat {s})"{" checked" if i == 0 else ""}>'
    f'{copertina("voce", h, s)}<span class="nome">{n}</span></label>' for i, (n, h, s) in enumerate(VOCE))
fisse = "".join(
    f'<figure class="fissa">{copertina(k, T[k]["hue"], T[k]["sat"])}<figcaption><b>{T[k]["nome"]}</b> · {n}</figcaption></figure>'
    for k, n in APPROVATE.items())
sezioni = (f'<section><h2>{T["voce"]["nome"]} · da scegliere</h2><div class="griglia">{scelte}</div></section>\n'
           f'<section><h2>Già approvate</h2><div class="griglia sei">{fisse}</div></section>')
open(f"{QUI}/tinte-sdrv.html", "w").write(open(f"{QUI}/modello.html").read().replace("<!--SEZIONI-->", sezioni))
print("ok")
