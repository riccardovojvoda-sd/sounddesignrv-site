import colorsys, glob, json, os, shutil
SITO = os.path.expanduser("~/Library/CloudStorage/Dropbox/Code/sounddesignrv-site")
QUI = os.path.dirname(os.path.abspath(__file__))
T = json.load(open(f"{SITO}/instagram-caroselli/tinte-categorie.json"))["categorie"]
IMG = f"{SITO}/src/assets/img/approfondimenti"

CAT = {  # foto, titolo d'esempio, alternative (nome, hue, sat)
 "consegna": ("montaggio-timeline-consegna-audio", "Cosa consegnare al sound designer",
              [("Petrolio", 195, .45), ("Smeraldo", 160, .40), ("Grafite", 210, .08)]),
 "loudness": ("lufs-video-loudness-resolve", "A quanti LUFS consegnare un video",
              [("Cobalto", 228, .55), ("Ciano scuro", 198, .50), ("Indaco", 248, .38)]),
 "musica": ("musica-spot-radio-manopola", "Musica per uno spot radio: cosa coprono le licenze",
            [("Mattone", 10, .62), ("Ambra", 36, .80), ("Prugna", 325, .40)]),
 "voce": ("voce-ai-speaker-microfono", "Voce AI o speaker vero per lo spot",
          [("Oro oliva", 55, .60), ("Rame", 28, .70), ("Terracotta", 15, .52)]),
 "set": ("bollettino-sonoro-cartellina-set", "Bollettino sonoro: cos'è e perché consegnarlo",
         [("Muschio", 95, .32), ("Bosco", 155, .42), ("Salvia", 120, .18)]),
 "sounddesign": ("foley-microfono-tavolo-studio", "Cos'è il foley e quando serve",
                 [("Viola", 288, .45), ("Lavanda scura", 258, .40), ("Melanzana", 305, .30)]),
 "brief": ("brief-sound-design-cuffie-scrivania", "Il brief per il sound design",
           [("Cardinale", 354, .60), ("Bordeaux", 335, .38), ("Grigio caldo", 20, .12)]),
}
NOMI_ATTUALI = {"consegna": "Verde rame", "loudness": "Blu", "musica": "Arancione", "voce": "Giallo",
                "set": "Verde", "sounddesign": "Viola tenue", "brief": "Rosa"}

def rgb(h, l, s):
    r, g, b = colorsys.hls_to_rgb(h / 360, l, min(1, s)); return round(r * 255), round(g * 255), round(b * 255)

def velo(h, s, l):
    r, g, b = rgb(h, l, s); st = []
    for p in range(0, 101, 4):
        t = min(1, max(0, (p - 35) / 40)); a = 0.93 * t * t * (3 - 2 * t)
        st.append(f"rgba({r},{g},{b},{a:.3f}) {p}%")
    return "linear-gradient(180deg," + ",".join(st) + ")"

os.makedirs(f"{QUI}/foto", exist_ok=True)
sezioni = []
for k, (foto, titolo, alt) in CAT.items():
    c = T[k]
    piccole = sorted(glob.glob(f"{IMG}/{foto}-*w.jpg"), key=lambda f: abs(int(f.rsplit("-", 1)[1][:-5]) - 800))
    shutil.copy(piccole[0] if piccole else f"{IMG}/{foto}.jpg", f"{QUI}/foto/{foto}.jpg")
    scelte = [(f"Attuale: {NOMI_ATTUALI[k]}", c["hue"], c["sat"])] + alt
    figure = []
    for i, (nome, h, s) in enumerate(scelte):
        et = "#%02x%02x%02x" % rgb(h, c["etichetta"], s + .1)
        figure.append(f'''<label class="scelta"><input type="radio" name="{k}" value="{nome} (hue {h}, sat {s})"{' checked' if i == 0 else ''}>
  <div class="cop"><div class="sfondo" style="background-image:url(foto/{foto}.jpg)"></div><div class="velo" style="background:{velo(h, s, c['velo'])}"></div>
    <div class="etichetta" style="color:{et}">GUIDA · {c['nome'].upper()}</div><div class="titolo">{titolo}</div><div class="piede"><span>sounddesignrv.com</span><span style="color:{et}">Scorri →</span></div></div>
  <span class="nome">{nome}</span></label>''')
    sezioni.append(f'''<section><h2>{c['nome']}</h2><div class="griglia">{"".join(figure)}</div></section>''')

html = open(f"{QUI}/modello.html").read().replace("<!--SEZIONI-->", "\n".join(sezioni))
open(f"{QUI}/tinte-sdrv.html", "w").write(html)
print("ok", len(sezioni))
