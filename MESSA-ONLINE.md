# Messa online di sounddesignrv.com su GitHub Pages

Stato al 2026-09-12: il sito e' gia' pubblicato su GitHub Pages e risponde al nome
`www.sounddesignrv.com`. Manca solo che il dominio punti li'. I passi da fare a mano
sono tuoi (Squarespace e Infomaniak vogliono il tuo login); il resto lo faccio io.

Ordine consigliato: prima il DNS (il sito nuovo va online subito, in un'ora), poi il
trasferimento del dominio a Infomaniak (dura fino a 5 giorni e non tocca il sito).

---

## Passo 1. DNS su Squarespace: far puntare il dominio a GitHub (10 minuti)

1. Apri https://account.squarespace.com/domains e clicca `sounddesignrv.com`.
2. Vai in **Impostazioni DNS** (DNS settings).
3. Nella sezione dei record di Squarespace ("Squarespace defaults" / "Record predefiniti")
   **elimina** tutti i record che puntano a Squarespace:
   - i 4 record `A` con host `@` (198.185.159.144, 198.185.159.145, 198.49.23.144, 198.49.23.145)
   - il record `CNAME` con host `www` che punta a `ext-sq.squarespace.com`
   Se Squarespace non lascia cancellare i predefiniti, scollega prima il dominio dal sito:
   nel sito Squarespace, Impostazioni > Domini > sounddesignrv.com > "Scollega" (Disconnect).
   Il sito Squarespace resta in piedi sul suo indirizzo `.squarespace.com`, non si perde niente.
4. **Lascia** il record `TXT` con host `@` che comincia con `google-site-verification=`.
5. **Aggiungi** questi record (tipo, host, valore):

```
A      @    185.199.108.153
A      @    185.199.109.153
A      @    185.199.110.153
A      @    185.199.111.153
AAAA   @    2606:50c0:8000::153
AAAA   @    2606:50c0:8001::153
AAAA   @    2606:50c0:8002::153
AAAA   @    2606:50c0:8003::153
CNAME  www  riccardovojvoda-sd.github.io
```

   TTL: lascia quello proposto.
6. Salva. Poi scrivimi "DNS fatto": da qui in avanti faccio io (controllo la propagazione,
   aspetto il certificato HTTPS di GitHub, accendo "Enforce HTTPS", verifico i redirect
   dai vecchi indirizzi e le tre lingue).

Cosa succede: entro un'ora al massimo `https://www.sounddesignrv.com` mostra il sito nuovo,
`sounddesignrv.com` senza www rimanda al www. Il certificato HTTPS lo fa GitHub da solo
(Let's Encrypt), puo' volerci fino a un'ora dopo il DNS.

---

## Passo 2. Trasferire il dominio a Infomaniak (5 minuti tuoi + fino a 5 giorni di attesa)

Perche': Squarespace lo rinnova il 30/10/2026 a 18-20 EUR; su Infomaniak costa meno,
il trasferimento aggiunge un anno (scadenza al 30/10/2027) e col dominio arriva la casella
`info@sounddesignrv.com` gratuita (Mail Starter). Da fare **entro fine settembre** per stare
larghi rispetto alla scadenza.

### 2a. Su Squarespace: sbloccare e prendere il codice

1. https://account.squarespace.com/domains > `sounddesignrv.com`.
2. Sezione **Trasferisci dominio** (Transfer) o **Impostazioni avanzate**:
   - disattiva il **blocco del trasferimento** (Transfer lock / "Blocca dominio");
   - clicca **Ottieni codice di trasferimento** / "Auth code" / "EPP code": Squarespace te lo
     mostra o te lo manda alla mail del titolare del dominio. Copialo.
3. Controlla che la mail del titolare del dominio (contatto "Registrant") sia una casella
   che leggi: Infomaniak e il registro mandano li' la conferma del trasferimento.
4. Se e' attiva la privacy WHOIS lasciala pure: per i .com non blocca il trasferimento.

Metti il codice di trasferimento in 1Password (voce "sounddesignrv.com dominio", campo
"Codice trasferimento"): serve solo nel passo dopo, ma se la procedura si interrompe lo ritrovi.

### 2b. Su Infomaniak: ordinare il trasferimento

1. Vai su https://www.infomaniak.com/it/domini/trasferimento-nome-dominio
   (loggato con l'account che ha gia' ghilda.app).
2. Scrivi `sounddesignrv.com`, Avvia il trasferimento.
3. Incolla il **codice di trasferimento**.
4. **Gestione DNS: scegli "Usa i DNS di Infomaniak"** (nameserver ns11/ns12.infomaniak.ch).
   Motivo: appena il dominio lascia Squarespace, i DNS di Squarespace smettono di rispondere.
5. Titolare: i tuoi dati (persona fisica, indirizzo, telefono, la mail che leggi).
6. Paga (circa 13-15 EUR: e' il rinnovo di un anno, obbligatorio nel trasferimento).
7. Arriva una mail di conferma del trasferimento (dal registro o da Infomaniak): **cliccala**.
   Senza quel clic il trasferimento resta fermo 5 giorni e poi decade.

Quando l'ordine e' fatto scrivimi "trasferimento avviato". Cosa faccio io in quella fase:
- seguo lo stato del dominio (whois) e ti avviso quando passa a Infomaniak;
- appena il dominio e' su Infomaniak ti guido a rimettere nella zona DNS di Infomaniak gli
  stessi record del passo 1 (A, AAAA, CNAME www, TXT di Google): sono 10 righe, te le
  ripasso pronte da incollare. Durante il trasferimento la zona non si puo' toccare.

### 2c. Dopo il trasferimento: casella info@ e sicurezza della posta

1. Manager Infomaniak > `sounddesignrv.com` > **Collega un servizio** > Servizio Mail
   > **Ordina Mail Starter** (gratuito). Crea la casella `info@sounddesignrv.com`.
2. Password della casella: generala in 1Password (voce "info@sounddesignrv.com"), incollala
   su Infomaniak. Non passarla in chat.
3. Nella zona DNS di Infomaniak, i record `MX`, `SPF` (TXT), `DKIM` e `DMARC` li propone
   Infomaniak stesso in un clic ("Correggi i record DNS" nel pannello del servizio Mail).
   Me li fai vedere e li controllo.
4. Configura la casella in Thunderbird (IMAP `mail.infomaniak.com` 993, SMTP 465) o usa
   l'app web https://mail.infomaniak.com.

---

## Passo 3. Chiudere Squarespace (dopo che tutto funziona da almeno una settimana)

1. Sito Squarespace di sounddesignrv: Impostazioni > Fatturazione > Abbonamento sito >
   **disattiva il rinnovo automatico** (pagato fino al 28/03/2027, resta acceso fino a li').
2. Non cancellare il sito Squarespace prima del 28/03/2027: costa zero tenerlo e serve
   come riferimento se manca qualcosa.
3. Ruota i codici di backup Squarespace e porta tutto in 1Password (voce gia' aperta nel
   fronte Dropbox).
4. Domini `sdrvstudio.com` (scade 24/04/2028) e `sdrvstudio.it` (24/04/2027): oggi Squarespace li
   rimanda con 301 a https://www.sounddesignrv.com/ e restano cosi' finche' stanno li'. Prima
   della loro scadenza decidere: trasferirli a Infomaniak (rimando web gratuito nel Manager,
   ~10-14 EUR/anno ciascuno) oppure lasciarli scadere.

---

## Cose fatte oggi da me (per memoria)

- Repo `riccardovojvoda-sd/sounddesignrv-site` reso **pubblico** (obbligatorio per GitHub
  Pages gratis). Prima di renderlo pubblico ho sostituito la tua gmail nei 20 commit con
  l'indirizzo anonimo di GitHub (`285192052+riccardovojvoda-sd@users.noreply.github.com`) e
  nel repo non compare piu'. Consiglio: su https://github.com/settings/emails attiva
  "Keep my email addresses private" e "Block command line pushes that expose my email".
- GitHub Pages attivo con sorgente "GitHub Actions", dominio custom `www.sounddesignrv.com`.
- Workflow `deploy.yml`: build Eleventy + controlli + deploy su Pages. Ogni push su `main`
  pubblica. Niente piu' FTP, niente secret.
- Sostituito `.htaccess` (GitHub Pages non lo legge): redirect dai vecchi URL come pagine
  statiche, PDF anche in `/s/`, Content-Security-Policy in un `<meta>`, rimando lingua sulla
  home in JavaScript. Verificato via CDP in locale e via HTTP sul server di GitHub.
- Facoltativo, piu' avanti: verificare il dominio su https://github.com/settings/pages
  ("Add a domain"): GitHub da' un record TXT `_github-pages-challenge-riccardovojvoda-sd`
  da mettere nel DNS. Protegge il dominio da chi volesse agganciarlo a un altro repo.
