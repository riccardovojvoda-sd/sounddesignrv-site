# Rende ogni slide di carosello-consegna.html in PNG 1080x1350 (png/) e in un PDF unico per LinkedIn.
# Uso: python3 rendi-carosello.py
import os, glob
from playwright.sync_api import sync_playwright
from PIL import Image
QUI = os.path.dirname(os.path.abspath(__file__)); N = 9
os.makedirs(os.path.join(QUI, 'png'), exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 1080, 'height': 1350})
    for i in range(1, N + 1):
        pg.goto(f'file://{QUI}/carosello-consegna.html#s{i}'); pg.reload(); pg.wait_for_timeout(300)
        pg.evaluate('document.fonts.ready')
        pg.screenshot(path=os.path.join(QUI, 'png', f'consegna-{i:02d}.png'))
    b.close()
img = [Image.open(f).convert('RGB') for f in sorted(glob.glob(os.path.join(QUI, 'png', 'consegna-*.png')))]
img[0].save(os.path.join(QUI, 'Cosa consegnare al sound designer - Sound Design RV.pdf'), save_all=True, append_images=img[1:], resolution=150)
print('ok')
