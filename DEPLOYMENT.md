# 🚀 Deployment auf Railway

Railway macht Deployment super einfach - **5 Minuten Setup**!

## Step 1: Railway Account erstellen

```bash
open https://railway.app
```

→ Mit GitHub anmelden (easiest)

## Step 2: Projekt erstellen

```bash
npm install -g @railway/cli
railway login
railway init
```

Dann:
```
? Create a new project? → Yes
? Name your project → reception-agent
```

## Step 3: Datenbank (PostgreSQL) hinzufügen

Im Railway Dashboard:
1. "+ Add" klicken
2. "PostgreSQL" auswählen
3. "Create" klicken

Railway erstellt automatisch eine DB mit Daten!

## Step 4: Environment Variables setzen

Im Railway Dashboard → Your Project → Variables:

```
DATABASE_URL=<automatisch von Railway gesetzt>
ANTHROPIC_API_KEY=sk-ant-xxx...
OPENAI_API_KEY=sk-proj-xxx...
SENDGRID_API_KEY=SG.xxx...
SENDER_EMAIL=sales@yourcompany.com
SENDER_NAME=Dein Firmenname
PORT=3000
NODE_ENV=production
```

## Step 5: Deployen

```bash
railway up
```

Das war's! 🎉 Railway deployed automatisch:
- ✅ Node.js App
- ✅ PostgreSQL Datenbank
- ✅ Environment Variables
- ✅ HTTPS SSL Certificate
- ✅ Auto-Scaling

---

## URLs nach Deployment

```
Web: https://your-project-name.up.railway.app
API: https://your-project-name.up.railway.app/api/leads
Health: https://your-project-name.up.railway.app/health
```

---

## DB Migrations nach Deployment

Nachdem PostgreSQL erstellt wurde:

```bash
# SSH in die Railway App
railway shell

# Migrations durchführen
psql $DATABASE_URL -f db/migrations/001_create_leads_table.sql
psql $DATABASE_URL -f db/migrations/002_create_campaigns_table.sql

# Überprüfen
psql $DATABASE_URL -c "\dt"
```

Oder mit Railway CLI:

```bash
railway run psql $DATABASE_URL -f db/migrations/001_create_leads_table.sql
```

---

## Logs anschauen

```bash
railway logs
```

---

## Redeploy nach Code-Änderungen

```bash
git push
railway up
```

Railway deployed automatisch bei `git push`!

---

## Troubleshooting

**Port fehlgeschlagen?**
→ Railway setzt PORT automatisch. Achte darauf dass dein Code `process.env.PORT` nutzt (✅ schon in src/index.js)

**Datenbank verbindungsfehler?**
→ Stelle sicher DATABASE_URL gesetzt ist
```bash
railway variables
```

**App startet nicht?**
```bash
railway logs
# Schau nach error messages
```

---

## Next Steps

Nach erfolgreichem Deployment:

1. **Teste dein API:**
   ```bash
   curl https://your-app.up.railway.app/health
   ```

2. **Starte Jobs:**
   ```bash
   curl -X POST https://your-app.up.railway.app/api/jobs/scrape
   ```

3. **Monitoring:**
   - Railway Dashboard zeigt Metrics (CPU, RAM, Logs)
   - Setze Alerts für Fehler auf

4. **Custom Domain (optional):**
   - Railway Settings → Domains
   - Füge deine Domain hinzu (z.B. reception-bot.yourcompany.com)

---

## Production Tipps

✅ **Setze NODE_ENV=production**
- Bessere Performance
- Saubere Logs

✅ **Monitore deine API-Ausgaben**
- Claude: Pro 1M Tokens ~$0.80 (Haiku)
- OpenAI: Pro 1M Tokens ~$0.15 (GPT-4o mini)
- SendGrid: Pro Email ~$0.0001

✅ **Rate Limiting**
```bash
# Kommt bald - momentan ohne Limits
```

✅ **Backups**
- Railway macht automatisch Datenbank-Backups
- Exportiere regelmäßig Leads
