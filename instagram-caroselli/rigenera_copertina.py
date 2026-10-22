# Rigenera la copertina di un carosello guida dopo applica_tinta.py: slide 1 (PNG, JPG per Instagram, PDF per LinkedIn),
# prima slide animata e video della storia. L'audio dei video che ce l'hanno (pezzo Artlist) si riporta identico dal file vecchio.
# I file vecchi vanno in <cartella>/_prima-della-tinta/ (non si sovrascrive mai senza copia).
# Uso: MyScraper/.venv/bin/python rigenera_copertina.py <cartella> <prefisso> <nome-cover> [--colore-freccia ...]
#   es. rigenera_copertina.py come-esportare-aaf aaf Guida_aaf
import glob, os, shutil, subprocess, sys, tempfile
from playwright.sync_api import sync_playwright
from PIL import Image
QUI = os.path.dirname(os.path.abspath(__file__))
SOCIAL = os.path.expanduser("~/Library/CloudStorage/Dropbox/Code/tool-personali")
PY = sys.executable
cartella, pref, nomecover = sys.argv[1:4]
D = os.path.join(QUI, cartella)
html = glob.glob(os.path.join(D, "carosello-*.html"))[0]
vecchi = os.path.join(D, "_prima-della-tinta"); os.makedirs(vecchi, exist_ok=True)
animata, storia = os.path.join(D, f"{pref}-01-animata.mp4"), os.path.join(D, f"{pref}-storia.mp4")
jpg = os.path.join(SOCIAL, "sdrv-social", "cover", f"{nomecover}_01.jpg")
png = os.path.join(D, "png", f"{pref}-01.png")
pdf = glob.glob(os.path.join(D, "*.pdf"))[0]

def salva(f):
    dst = os.path.join(vecchi, os.path.basename(f))
    if os.path.exists(f) and not os.path.exists(dst): shutil.copy2(f, dst)
for f in (animata, storia, jpg, png, pdf): salva(f)

def ha_audio(f):
    r = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "a", "-show_entries", "stream=codec_type", "-of", "csv=p=0", f], capture_output=True, text=True)
    return "audio" in r.stdout

# 1) slide 1 ferma: PNG, JPG per Instagram, PDF per LinkedIn
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={"width": 1080, "height": 1350})
    pg.goto(f"file://{html}#s1"); pg.reload(); pg.wait_for_timeout(400); pg.evaluate("document.fonts.ready")
    pg.screenshot(path=png); b.close()
Image.open(png).convert("RGB").save(jpg, quality=95)
img = [Image.open(f).convert("RGB") for f in sorted(glob.glob(os.path.join(D, "png", f"{pref}-*.png")))]
img[0].save(pdf, save_all=True, append_images=img[1:], resolution=150)
print("slide 1, JPG e PDF rifatti:", len(img), "pagine")

# 2) video: grafica nuova, audio dal file vecchio dove c'era
lav = tempfile.mkdtemp(prefix=f"copertina-{pref}-")
def rifai(uscita, comando):
    vecchio = os.path.join(vecchi, os.path.basename(uscita)); nuovo = os.path.join(lav, os.path.basename(uscita))
    subprocess.run(comando + [nuovo], check=True, stdout=subprocess.DEVNULL)
    if ha_audio(vecchio):
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", nuovo, "-i", vecchio, "-map", "0:v", "-map", "1:a", "-c", "copy", "-shortest",
                        "-movflags", "+faststart", uscita], check=True)
    else: shutil.copy2(nuovo, uscita)
    print("video rifatto:", os.path.basename(uscita), "(audio dal vecchio)" if ha_audio(vecchio) else "(senza audio)")
IG = os.path.join(SOCIAL, "storie-instagram")
rifai(animata, [PY, os.path.join(IG, "copertina_animata.py"), html, "--stile", "misto", "--durata", "15"])
# storia: stesse opzioni in uso per Sound Design RV (LEGGIMI di storie-instagram): freccia verdigris, disegno pieno
rifai(storia, [PY, os.path.join(IG, "storia_racconto.py"), html, "--colore", "#7BB5B2", "--disegno", "piena", "--cartella-lavoro", os.path.join(lav, "lavoro-storia")])
