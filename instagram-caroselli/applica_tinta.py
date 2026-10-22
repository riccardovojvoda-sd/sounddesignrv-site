# Applica la tinta di categoria alla copertina (.cop) del carosello di una guida: foto nitida e più viva, velo colorato solo nel terzo basso.
# Uso: python3 applica_tinta.py [cartella ...]   (senza argomenti: tutte le cartelle di tinte-categorie.json che hanno un carosello-*.html)
# Idempotente: il blocco tra /*tinta-inizio*/ e /*tinta-fine*/ viene sostituito.
import colorsys, glob, json, os, re, sys
QUI = os.path.dirname(os.path.abspath(__file__))
T = json.load(open(os.path.join(QUI, "tinte-categorie.json"), encoding="utf-8"))

def hls(h, l, s):
    r, g, b = colorsys.hls_to_rgb(h / 360, l, min(1, s)); return round(r * 255), round(g * 255), round(b * 255)

def categoria(cartella):
    sid = T["cartelle"][cartella]
    return next(k for k, v in T["guide"].items() if sid in v), sid

def blocco(cat):
    c = T["categorie"][cat]; r, g, b = hls(c["hue"], c["velo"], c["sat"]); et = "#%02x%02x%02x" % hls(c["hue"], c["etichetta"], c["sat"] + 0.1)
    # alpha 0 fino al 35% dell'altezza, sale a 0,93 al 75% (curva smoothstep), poi resta
    stops = []
    for p in range(0, 101, 4):
        t = min(1, max(0, (p - 35) / 40)); a = 0.93 * t * t * (3 - 2 * t)
        stops.append(f"rgba({r},{g},{b},{a:.3f}) {p}%")
    return ("/*tinta-inizio*/\n"
            f"/* categoria: {c['nome']} (tinte-categorie.json) */\n"
            ".cop .sfocato{opacity:0}\n"
            ".cop .sfondo{filter:saturate(1.35) contrast(1.12)}\n"
            f".cop .velo{{background:linear-gradient(180deg,{','.join(stops)})}}\n"
            f".cop .etichetta,.cop .piede span:last-child{{color:{et}}}\n"
            "/*tinta-fine*/\n")

for cartella in (sys.argv[1:] or list(T["cartelle"])):
    cartella = cartella.strip("/").split("/")[-1]
    files = glob.glob(os.path.join(QUI, cartella, "carosello-*.html"))
    if not files: print("salto (nessun carosello):", cartella); continue
    cat, sid = categoria(cartella)
    for f in files:
        h = open(f, encoding="utf-8").read()
        h = re.sub(r"/\*tinta-inizio\*/.*?/\*tinta-fine\*/\n", "", h, flags=re.S)
        h = h.replace("</style>", blocco(cat) + "</style>", 1)
        open(f, "w", encoding="utf-8").write(h)
        print("ok", cartella, sid, "->", T["categorie"][cat]["nome"])
