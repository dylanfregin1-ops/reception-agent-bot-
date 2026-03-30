# 🚀 RENDER DEPLOYMENT - SUPER EINFACH!

Weil GitHub Push kompliziert wird, deployen wir direkt mit Render!

## Option 1: Docker Image direkt zu Render (EASIEST!)

Render hat einen **One-Click Deploy Button** für Docker!

### Schritt 1: Docker Image bauen & testen

```bash
cd /Users/dylanfregin/.claude/worktrees/reception-agent-dev

# Lokal testen mit Docker Compose
docker-compose up -d

# Test
curl http://localhost:3000/health

# Stoppen
docker-compose down
```

### Schritt 2: Render Account erstellen

https://render.com → Sign Up

### Schritt 3: Web Service manuell erstellen

Im Render Dashboard:
1. **+ New** → **Web Service**
2. **Runtime:** Docker (!) nicht Node
3. Fülle aus:
   ```
   Name: reception-agent-bot
   Docker Image: node:18-alpine
   Start Command: npm start
   ```

4. **Environment Tab** → Add Variables:
   ```
   DATABASE_URL=postgresql://...  (wird auto-generiert nach DB erstellen)
   ANTHROPIC_API_KEY=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
   OPENAI_API_KEY=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
   SENDGRID_API_KEY=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
   SENDER_EMAIL=sales@yourcompany.com
   SENDER_NAME=Receptionist AI
   NODE_ENV=production
   PORT=3000
   ```

5. **+ Add PostgreSQL Database**
   - Name: reception_sales
   - PostgreSQL wird auto-erstellt!

6. **Create Web Service**

### Schritt 4: Code hochladen

Nachdem Service erstellt ist:

```bash
# SSH Key aus Render holen und zu GitHub hinzufügen
# Oder: Code direkt via ZIP hochladen

# Alternative: Git über HTTPS mit neuem Token
git remote set-url github https://github.com/dylanfregin1-ops/reception-agent-bot-.git

# Nochmal pushen mit neuem Token wenn nötig
```

---

## Option 2: Mit Render CLI (noch einfacher!)

```bash
# Render CLI installieren
npm install -g @render/cli

# Anmelden
render login

# Deployen
render deploy --name reception-agent-bot

# Logs ansehen
render logs reception-agent-bot
```

---

## Nach Deployment

### URL deiner App:
```
https://reception-agent-bot.onrender.com
```

### DB Migrations durchführen:

Im Render Dashboard → Shell:
```bash
psql $DATABASE_URL -f db/migrations/001_create_leads_table.sql
psql $DATABASE_URL -f db/migrations/002_create_campaigns_table.sql
```

### Test:
```bash
curl https://reception-agent-bot.onrender.com/health
```

---

## Kosten

| Service | Kostenlos? | Kosten |
|---------|-----------|--------|
| App Web Service | Ja* | $0-7/Monat |
| PostgreSQL | Nein | $15/Monat |
| **Total** | - | **$15/Monat** |

*Free Tier: 0.5 CPU, 512MB RAM, kostenlos 1. Monat

---

## Troubleshooting

**"Build failed"?**
→ Schau Logs im Render Dashboard

**"Datenbank Error"?**
→ Überprüfe DB Migrations wurden durchgeführt

**"Port Error"?**
→ App nutzt `process.env.PORT` (✅ schon konfiguriert)

**"API Key Error"?**
→ Überprüfe alle Environment Variables im Dashboard
