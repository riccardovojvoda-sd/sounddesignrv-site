# Aggiorna la strip Instagram della home (it/en/fr): legge il profilo @sound_design_rv dal Brave di Riccardo
# con il lettore del sito OFFLMTS (offlmts-site/strumenti/instagram-leggi-post.py, unica copia), salva le
# copertine nuove in src/assets/img/instagram e riscrive src/_data/instagram.json con i 12 post più recenti.
# Le didascalie dei post già noti restano; per i nuovi: didascalia del post su una riga, primi 140 caratteri.
# Uso: python3 scripts/instagram-aggiorna.py [--push]   (con --push: commit e push se c'è qualcosa di nuovo)
# Ogni sera alle 22:40 lo lancia il LaunchAgent com.sounddesignrv.instagram-aggiorna (log in logs/).
import json,subprocess,sys,os,base64,tempfile
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LETTORE=os.path.join(os.path.dirname(R),'offlmts-site/strumenti/instagram-leggi-post.py')
DATI=os.path.join(R,'src/_data/instagram.json'); IMG=os.path.join(R,'src/assets/img/instagram')
PROFILO='sound_design_rv'; N=12
tmp=os.path.join(tempfile.mkdtemp(),'ig.json')
subprocess.run([sys.executable,LETTORE,PROFILO,str(N+2),tmp],check=True)
letti=json.load(open(tmp))
if len(letti)<N: raise SystemExit(f'letti solo {len(letti)} post, non tocco niente')
vecchi={p['url']:p for p in json.load(open(DATI))}
nuovi=[]; aggiunti=[]
for p in letti[:N]:
    if p['url'] in vecchi: nuovi.append(vecchi[p['url']]); continue
    if not p.get('b64'): raise SystemExit(f'niente miniatura per {p["url"]}')
    open(os.path.join(IMG,p['id']+'.jpg'),'wb').write(base64.b64decode(p['b64'].split(',',1)[1]))
    dida=' '.join(p['alt'].split())[:140] or 'Sound design by @sound_design_rv'
    nuovi.append({'url':p['url'],'copertina':p['id']+'.jpg','didascalia':dida,'tipo':p['tipo']}); aggiunti.append(p['url'])
if not aggiunti and [p['url'] for p in nuovi]==list(vecchi): print('nessun post nuovo'); sys.exit(0)
json.dump(nuovi,open(DATI,'w'),ensure_ascii=False,indent=1); open(DATI,'a').write('\n')
usate={p['copertina'] for p in nuovi}
for f in os.listdir(IMG):
    if f.endswith('.jpg') and f not in usate: os.remove(os.path.join(IMG,f))
print('post nuovi:',*aggiunti)
if '--push' in sys.argv:
    subprocess.run(['git','-C',R,'add','src/_data/instagram.json','src/assets/img/instagram'],check=True)
    subprocess.run(['git','-C',R,'commit','-q','-m',f'Instagram: {len(aggiunti)} post nuovi nella strip\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>'],check=True)
    subprocess.run(['git','-C',R,'push','-q'],check=True); print('push fatto')
