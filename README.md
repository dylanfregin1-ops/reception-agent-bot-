# KI-Rezeptionsagent - Sales Automation Bot

Automatisiertes B2B SaaS System für die Automatisierung der Akquisition von KI-Rezeptionsagenten.

## Quick Start

### Setup
```bash
cp .env.example .env
# API-Keys in .env eintragen
npm install
```

### Datenbank
```bash
createdb reception_sales
psql reception_sales -f db/migrations/001_create_leads_table.sql
psql reception_sales -f db/migrations/002_create_campaigns_table.sql
```

### Server starten
```bash
npm start
```

## Jobs

- `npm run scrape` - Scrapet Receptionist-Jobs von Indeed
- `npm run enrich` - Enriched Leads mit Email und Firmendaten
- `npm run send-emails` - Versendet personalisierte Email-Sequenzen
- `npm run call-leads` - Initiiert Cold-Call Kampagne

## Architektur

### Lead-Generierung
- Scraper findet Job-Postings für "Rezeptionist"
- Lead-Enrichment fügt Email und Firmendaten hinzu
- Duplikat-Erkennung

### Vertriebsautomation
- KI-personalisierte Email-Sequenzen (3 Emails)
- Cold-Call Bot mit Voice
- Lead-Scoring (0-100)

### Demo-Booking
- Automatische Terminvergabe
- Google Calendar Integration
- Bestätigungs-Emails

## API Endpunkte

`GET /api/leads` - Alle Leads mit Filtering
`GET /api/emails/campaigns` - Email-Kampagnen
`GET /api/calls/logs` - Anruf-Logs
`GET /health` - Health Check
