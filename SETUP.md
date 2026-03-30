# 🚀 Setup-Anleitung für KI-Rezeptionsagent

Diese Anleitung führt dich Schritt-für-Schritt durch die Konfiguration.

## Step 1: API-Keys beschaffen

Du brauchst **mindestens 3 Keys**:

### ✅ Erforderlich

#### 1. Anthropic API Key (für Claude KI)
```bash
open https://console.anthropic.com/account/keys
```
- [ ] Anmelden oder registrieren
- [ ] "Create API key" klicken
- [ ] Name eingeben (z.B. "reception-bot")
- [ ] Key kopieren (Format: `sk-ant-...`)
- [ ] In `.env` → `ANTHROPIC_API_KEY=` eintragen

#### 2. OpenAI API Key (für Voice)
```bash
open https://platform.openai.com/api/keys
```
- [ ] Anmelden oder registrieren
- [ ] "Create new secret key" klicken
- [ ] Key kopieren (Format: `sk-proj-...`)
- [ ] **Wichtig:** Guthaben aufladen (Prepaid)
- [ ] In `.env` → `OPENAI_API_KEY=` eintragen

#### 3. SendGrid API Key (für Email-Versand)
```bash
open https://app.sendgrid.com/settings/api_keys
```
- [ ] Anmelden oder registrieren
- [ ] "Create API Key" klicken
- [ ] Restricted Access wählen
- [ ] "Mail Send" Permissions aktivieren
- [ ] Key kopieren (Format: `SG.xxx`)
- [ ] In `.env` → `SENDGRID_API_KEY=` eintragen

#### 4. Sender Email in SendGrid verifizieren
```bash
open https://app.sendgrid.com/settings/sender_auth
```
- [ ] Email-Adresse hinzufügen (z.B. sales@yourcompany.com)
- [ ] Verifizierungs-Email bestätigen
- [ ] Diese Email in `.env` → `SENDER_EMAIL=` eintragen

---

### 📋 Optional (für erweiterte Features)

#### Eleven Labs API Key (für natürliche Voice)
```bash
open https://elevenlabs.io/app/profile/api-keys
```
- [ ] Kostenlos: 11,000 Zeichen/Monat
- [ ] In `.env` → `ELEVEN_LABS_API_KEY=` eintragen

#### Hunter.io API Key (für Email-Finder)
```bash
open https://app.hunter.io/api
```
- [ ] Kostenlos: 50 Emails/Monat
- [ ] In `.env` → `HUNTER_IO_API_KEY=` eintragen

#### Google Calendar (für automatische Demo-Buchung)
```bash
open https://console.cloud.google.com/apis/credentials
```
- [ ] OAuth 2.0 Client erstellen
- [ ] Authorized redirect URI: `http://localhost:3000/auth/google/callback`
- [ ] Client ID & Secret in `.env` eintragen

---

## Step 2: Konfigurationsdatei ausfüllen

```bash
# .env öffnen und Keys eintragen
nano .env
```

Überprüfe diese Felder (mindestens):

```env
ANTHROPIC_API_KEY=sk-ant-YOUR_KEY_HERE
OPENAI_API_KEY=sk-proj-YOUR_KEY_HERE
SENDGRID_API_KEY=SG.YOUR_KEY_HERE
SENDER_EMAIL=deine-email@example.com
SENDER_NAME="Dein Firmenname"
```

---

## Step 3: Konfiguration validieren

Alle Keys richtig eintragen?

```bash
node scripts/validate-env.js
```

Wenn alle ✅ sind → Nächster Schritt!
Wenn ❌ fehlen → Keys nochmal überprüfen

---

## Step 4: Datenbank setup

### PostgreSQL installieren

**macOS:**
```bash
brew install postgresql
brew services start postgresql
```

**Linux:**
```bash
sudo apt-get install postgresql
sudo service postgresql start
```

**Windows:**
```bash
# Download: https://www.postgresql.org/download/windows/
# Oder nutze PostgreSQL App
```

### Datenbank erstellen

```bash
createdb reception_sales
```

### Schema migrieren

```bash
psql reception_sales -f db/migrations/001_create_leads_table.sql
psql reception_sales -f db/migrations/002_create_campaigns_table.sql
```

### Überprüfung

```bash
psql reception_sales -c "\dt"
```

Sollte zeigen:
- ✅ leads
- ✅ email_campaigns
- ✅ call_logs

---

## Step 5: Server starten

```bash
npm start
```

Solltest sehen:
```
Server läuft auf Port 3000 im development Modus
```

### Health Check

```bash
curl http://localhost:3000/health
```

Sollte antworten:
```json
{"status":"ok","timestamp":"2026-03-30T..."}
```

---

## Step 6: Erste Daten testen

### 1. Ein Lead scrapen

```bash
npm run scrape
```

Sollte "X Rezeptionist-Jobs auf Indeed gefunden" zeigen

### 2. Leads enrichen

```bash
npm run enrich
```

### 3. Email versenden

```bash
npm run send-emails
```

---

## 🎉 Fertig!

Dein KI-Rezeptionsagent ist jetzt bereit!

Verfügbare Befehle:

```bash
npm start              # Server starten
npm run scrape         # Jobs scrapen
npm run enrich         # Leads enrichen
npm run send-emails    # Emails versenden
npm run call-leads     # Anrufe tätigen
```

---

## 🆘 Fehlerbehebung

### "ANTHROPIC_API_KEY nicht gesetzt"
→ Überprüfe `.env` Datei und starte neu

### "Datenbank existiert nicht"
→ Starte `createdb reception_sales`

### "SendGrid: Unauthorized"
→ Überprüfe API Key in SendGrid Dashboard

### "Email-Versand funktioniert nicht"
→ Überprüfe ob Sender-Email in SendGrid verifiziert ist

---

## Nächste Schritte

1. [📖 Architektur lesen](./docs/architecture.md)
2. [🔌 API Dokumentation](./docs/api.md)
3. [🚀 Deployment](./deployment.md)
