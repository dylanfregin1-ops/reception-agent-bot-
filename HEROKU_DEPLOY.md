# 🚀 Deployment auf Heroku (3 Minuten!)

Heroku ist noch einfacher als Railway - **nur 3 Befehle**!

## Schritt 1: Heroku CLI installieren

```bash
brew install heroku/brew/heroku
```

## Schritt 2: Anmelden

```bash
heroku login
```

Browser öffnet sich → Klick "Log In" → Fertig!

## Schritt 3: App erstellen & deployen

```bash
cd /Users/dylanfregin/.claude/worktrees/reception-agent-dev

# Heroku App erstellen
heroku create reception-agent-bot

# PostgreSQL Datenbank hinzufügen
heroku addons:create heroku-postgresql:hobby-dev

# Environment Variables setzen
heroku config:set ANTHROPIC_API_KEY=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
heroku config:set OPENAI_API_KEY=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
heroku config:set SENDGRID_API_KEY=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
heroku config:set SENDER_EMAIL=sales@yourcompany.com
heroku config:set SENDER_NAME="Receptionist AI"
heroku config:set NODE_ENV=production

# Deployen
git push heroku main
```

Das war's! 🎉

---

## Nach Deployment

### Deine App läuft unter:
```
https://reception-agent-bot.herokuapp.com
```

### DB Migrations durchführen:

```bash
heroku run psql -f db/migrations/001_create_leads_table.sql
heroku run psql -f db/migrations/002_create_campaigns_table.sql
```

### Logs anschauen:
```bash
heroku logs --tail
```

### Testen:
```bash
curl https://reception-agent-bot.herokuapp.com/health
```

---

## Kosten

**Heroku Free Tier:**
- ❌ Kostenlos (aber wird 2024 eingestellt)
- Bezahlter Plan: $5-7/Monat

**PostgreSQL:**
- Hobby Tier: $9/Monat
- Production Tier: $50+/Monat

---

## Alternative: Railway (mit Token)

Falls Railway Token nicht funktioniert, versuche:

```bash
open https://railway.app/account/tokens
# Neuen Token erstellen
# Token kopieren

export RAILWAY_TOKEN="dein-token-hier"
railway init
railway up
```

---

## Troubleshooting

**"heroku create" funktioniert nicht?**
```bash
heroku apps
# Wenn App existiert, nutze sie:
heroku git:remote -a reception-agent-bot
```

**Datenbank-Fehler?**
```bash
heroku config | grep DATABASE_URL
# Sollte anzeigen: postgres://...
```

**Port-Fehler?**
→ Setze in Procfile:
```
web: PORT=5000 npm start
```

---

## Next: Custom Domain

```bash
heroku domains:add api.yourcompany.com
# Dann DNS-Record setzen auf Heroku
```
