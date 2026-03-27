# AI Business Design: Klempner-Automatisierung

**Datum:** 2026-03-27
**Status:** Design Approved
**Autor:** Claude

---

## Executive Summary

Ein lokal fokussiertes, vollständiges Dienstleistungs-Angebot für Klempner- und Reparaturdienste. KI-Agenten automatisieren Terminplanung, Kundenkommunikation, Lead-Qualifizierung und Notfall-Umscheduling. Hybrid-Skalierungsmodell: Phase 1 (Monate 1-6) = persönliche Workshops + standardisierte Implementierung; Phase 2 (Monate 6-12) = Team-Skalierung.

---

## 1. Geschäftsmodell

### 1.1 Nische & Zielgruppe
- **Primär:** Klempner- und Reparaturdienste (5-50 Mitarbeiter)
- **Sekundär:** Schulungen für ältere Personen/Unternehmer

### 1.2 Kernproblem (Customer Pain Point)
- Manuelle Terminplanung = zeitaufwändig
- Viele Anfragen gehen verloren oder werden vergessen
- Notfall-Absagen führen zu Chaos beim Umschedulen
- Inhaberr nimmt zu viele Anrufe, zu wenig Zeit für Handwerk
- Fehlende Automatisierung = lost revenue

### 1.3 Lösung: KI-Agenten-Paket
**"Klempner-Automation Pro"** — 3-teiliges Angebot:

1. **Workshop (4-6h vor Ort)**
   - Grundlagen KI für Handwerksbetriebe (einfach verständlich)
   - Live-Demo mit echten Kundendaten
   - Praktische Übungen
   - Q&A auf Augenhöhe

2. **KI-Agenten-Implementation (1-2 Wochen)**
   - Bis zu 3 vorkonfigurierte Agenten:
     - **Agent 1:** Anfrage-Verarbeitung + Terminvorschlag
     - **Agent 2:** Notfall-Absagen & automatisches Umscheduling
     - **Agent 3:** Lead-Qualifizierung (welche Anfragen sind qualifiziert?)
   - Integration mit bestehenden Tools (CRM, Telefon, Email)
   - Testing mit Live-Daten
   - Handover & Training

3. **Monatlicher Support**
   - Optimierung basierend auf echten Daten
   - Fehlerbehandlung & Debugging
   - Monatliche 1h Check-in Calls
   - Proaktive Verbesserungsvorschläge

### 1.4 Preismodell

**Phase 1: Pilot-Pricing (3-5 Kunden)**
| Komponente | Preis |
|---|---|
| Workshop (4-6h vor Ort) | €300-500 |
| Implementation & Setup | €500-1.000 |
| Monatlich (Support) | €100-200 |
| **Gesamtjahr Pilot-Kunde** | ~€2.000-3.200 |

**Phase 2: Regular-Pricing (ab Kunde 6)**
| Komponente | Preis |
|---|---|
| Workshop | €1.000-1.500 |
| Implementation | €3.000-5.000 |
| Monatlich | €300-600 |
| **Gesamtjahr regulärer Kunde** | ~€7.000-12.200 |

**Rationale für Pilot-Pricing:**
- Schnell validieren (Go-to-Market Learning)
- Case Studies & Testimonials generieren
- Kunden werden zu Advocates
- Nach 3-5 erfolgreichen Projekten → reguläre Preise rechtfertigt sich durch Proof of Concept

---

## 2. Unique Selling Proposition (USP)

> "Wir sind der lokale Ansprechpartner für Handwerksbetriebe. Wir sprechen deine Sprache, kennen deine Probleme, und bieten dir die komplette Lösung – von der Schulung bis zur Live-Implementierung – aus einer Hand. Keine externen Agenturen, keine Tech-Jargon, nur praktische Ergebnisse."

### 2.1 Kernmerkmale des USP
1. **Lokal** — Persönliche Workshops vor Ort, nicht remote
2. **Sprache** — Verständlich für Handwerker, nicht für Tech-Menschen
3. **Vollständig** — Training + Implementation + Support aus einer Hand
4. **All-in-One** — Ein Ansprechpartner, keine Agenturen-Hopping
5. **Handwerk-Know-How** — Verstehen von echten Problemen (nicht theoretisch)

---

## 3. Technologie-Stack (Hybrid-Pragmatisch)

### 3.1 Nicht: Eigene Plattform bauen
→ Später, wenn skaliert

### 3.2 Ja: Bestehende No-Code Tools kombinieren

| Layer | Tool | Begründung |
|---|---|---|
| **Automation** | Make.com oder Zapier | No-code, einfach zu debuggen, für Kunden auch später selbst wartbar |
| **AI-Backbone** | OpenAI API (ChatGPT) oder Claude API | Zuverlässig, günstig, gute Dokumentation |
| **CRM/Datenbank** | Kundentool (HubSpot, Brevo, Airtable) oder ihre bestehende Lösung | Integration, weniger Migration |
| **Kommunikation** | Twilio (SMS/Telefon) oder native Integrationen | Zuverlässig, APIs gut dokumentiert |
| **Monitoring** | Google Sheets + Make Integration oder simple Make Dashboard | Kunden können selbst monitoren |

### 3.3 Warum dieser Stack?

✅ **Du brauchst keine Entwickler** — Alles no-code konfigurierbar
✅ **Schnell zum Launch** — Wochen statt Monate
✅ **Kunden können es verstehen** — Nicht black-box
✅ **Später migrierbar** — Wenn du skalierst, kannst du auf eigene Plattform wechseln
✅ **Kosten niedrig** — Make/Zapier + API-Kosten sind günstig

---

## 4. Go-to-Market & Sales-Funnel

### 4.1 Kanal: Instagram Ads → Landing Page → Sales Call

```
Instagram Ad
    ↓
Landing Page (Free Demo + Beratung)
    ↓
Lead-Form ausfüllen
    ↓
30-min Zoom Call (kostenlos)
    ↓
Qualifiziert? → Pilot-Angebot
    ↓
Workshop buchen
```

### 4.2 Landing Page-Elemente

**Headlines & Copy:**
- Problem: "Terminplanung kostet dir täglich 2+ Stunden? Das muss nicht sein."
- Solution: "KI-Agenten übernehmen deine Terminplanung 24/7"
- Social Proof: Testimonials von Pilotkunden (später)

**CTA:** "Kostenlose Demo + Beratung (30 min)"

**Visuals:**
- Screenshot der Agenten in Aktion
- Vorher/Nachher Vergleich (Zeit gespart, Termine angenommen)
- Dein Foto (Vertrauen & Lokal-Feeling)

### 4.3 Sales-Call-Script (30 min)

1. **Warmup (5 min):** Ihr aktuelles Setup verstehen
2. **Problem-Diagnose (10 min):** Wo verliert ihr Zeit? Welche Anfragen gehen verloren?
3. **Live-Demo (8 min):** Zeige mit ihren echten Daten, wie Agent arbeitet
4. **Angebot (5 min):** "Lass dich überraschen — nur 3 Pilot-Kunden mit reduzierten Preisen"
5. **Next Steps:** Workshop buchen (wenn ja)

---

## 5. Kundenergebnis (Value Proposition)

### 5.1 Vorher
- Chef sitzt im Büro, nimmt Anrufe
- Viele Anfragen vergessen oder übersehen
- Notfall-Absage = Chaos beim Umschedulen
- Inhaberin = Flaschenhal bei jeder Anfrage
- Viel administrative Zeit, wenig Zeit für Handwerk

### 5.2 Nachher
- KI-Agent nimmt Anfragen (24/7, auch nachts)
- Schlägt automatisch verfügbare Termine vor
- Notfall-Absagen = Agent reschedult sofort die Mitarbeiter
- Chef fokussiert auf Handwerk, nicht auf Admin
- **Konkrete Resultat:**
  - +30-50% mehr angenommene Anfragen
  - -2h täglich Admin-Zeit
  - Weniger Stress, mehr Fokus auf Kerngeschäft

---

## 6. Deine Rollen (Phase 1: Hybrid)

| Rolle | Beschreibung | Zeit |
|---|---|---|
| **Sales & Marketing** | Instagram Ads, Netzwerk, Lead-Calls | 30% |
| **Workshop-Leiter** | 4-6h Workshop vor Ort (Schulung) | 20% |
| **Implementierer** | Make/Zapier konfigurieren, Agenten setup | 35% |
| **Support** | Monatliche Check-ins, Bugfixing | 15% |

### 6.1 Phase 2: Team-Skalierung (Monate 6-12)

- Du: **Sales, Strategy, Quality Control**
- Team: **Implementation, Workshops, Frontline-Support**
- Prozesse: Dokumentiert & standardisiert für Team-Onboarding

---

## 7. Implementation Timeline (MVP Launch)

| Phase | Dauer | Was? | Output |
|---|---|---|---|
| **Woche 1-2** | 2w | Landing Page + Instagram Ad Setup | Live Landing Page, erste Ads laufen |
| **Woche 3-4** | 2w | Erste Sales Calls | 1-2 Pilotkunden akquiriert |
| **Woche 5-8** | 4w | Workshop 1 + Implementation 1-2 | 1-2 Kunden live, erste Daten |
| **Woche 9-12** | 4w | Workshop + Implementation 3-5 | 3-5 Pilotkunden komplett |
| **Monat 4+** | ∞ | Optimierung + Preise anheben | Testimonials, reguläre Preisierung |

---

## 8. Metriken & Erfolg (Phase 1)

### 8.1 Ziele (Monate 1-6)

| Metrik | Ziel |
|---|---|
| Pilotkunden akquiriert | 3-5 |
| Case Studies/Testimonials | 3-5 |
| Monatliche Anfragen (Landing Page) | 20-30 |
| Conversion Rate (Anfrage → Call) | 30-40% |
| Conversion Rate (Call → Pilot) | 40-50% |
| Customer Satisfaction | 4.5+/5 |

### 8.2 Business Metrics

| Metrik | Monat 6 | Monat 12 |
|---|---|---|
| Kunden | 5 | 10-15 |
| MRR (Monatlich Recurring Revenue) | €500-1.000 | €3.000-9.000 |
| ARR (Annual) | €6.000-12.000 | €36.000-108.000 |

---

## 9. Risiken & Mitigationen

| Risiko | Mitigation |
|---|---|
| Agenten funktionieren nicht gut genug | Fokus auf einfache, robuste Workflows. Piloten bevorzugen Simplicity. |
| Zu viele Customization-Anfragen | Templates vordefinieren, Scope-Gespräche vor Workshop |
| Schwierig, die richtige Zielgruppe zu erreichen (Instagram) | A/B Testing von Ad-Copy, Targeting nach Lokation + Handwerk |
| Team-Skalierung später schwierig | Dokumentation + SOP früh etablieren, nicht erst später |
| Konkurrenz mit anderen AI-Tools | USP klar positionieren: lokal + vollständig + persönlich |

---

## 10. Finanzielle Ausblick (Estimate)

### 10.1 Startkosts (Phase 1, First 6 Months)

| Item | Kosten |
|---|---|
| Make.com/Zapier (6m @ €20-50/m) | €120-300 |
| OpenAI API (gemäß Nutzung, est. €200-500) | €200-500 |
| Landing Page (Webflow, Framer, o.ä.) | €0-300 (one-time) |
| Instagram Ads (monatlich) | €500-1.000 |
| Sonstige Tools/Misc | €100-200 |
| **Total Startup** | **€920-2.300** |

### 10.2 Revenue (Phase 1, 3-5 Pilotkunden)

**Szenario: 5 Pilotkunden in 6 Monaten**

- Setup Revenue: 5 × €750 (avg) = **€3.750**
- Monthly Revenue (Monat 6): 5 × €150 (avg) = **€750/m**
- **6-Monats-Revenue: €3.750 + (€750 × 3 months avg) = €5.000**
- **Net Profit (Phase 1): ~€2.700**

**Phase 2 (Monate 6-12): Scale**

- +10 neue Kunden (total 15)
- Monthly Recurring: 15 × €300 (avg, higher pricing now) = **€4.500/m**
- **6-Monats-Revenue (Phase 2): €3.000 (setup) + €27.000 (MRR) = €30.000**
- **Approx. Net Profit (Phase 2, after team costs): €15.000-20.000**

---

## 11. Nächste Schritte (Nach Design-Approval)

1. **Landing Page bauen** (1 Woche)
2. **Instagram Ad Setup** (1 Woche)
3. **Make/Zapier Template vorbereiten** (2 Wochen)
4. **Sales-Script & Workshop-Outline schreiben** (1 Woche)
5. **Go-to-Market Launch** (Woche 4)

---

## 12. Anhang: Make/Zapier Agent-Workflow (Beispiel)

### 12.1 Agent 1: Anfrage-Verarbeitung

```
Kunde sendet WhatsApp/Email: "Brauch einen Klempner für Samstag"
  ↓
Webhook → Make/Zapier
  ↓
OpenAI: Extrahiere (Name, Tel, Problem, Wunschdatum)
  ↓
Make: Prüfe Kalender auf freie Slots
  ↓
OpenAI: Schreibe höfliche Antwort mit Vorschlägen
  ↓
Sende SMS/WhatsApp zurück: "Danke! Wir haben Slots: Sa 14:00, So 09:00"
  ↓
Kunde bestätigt → Termin in CRM
```

### 12.2 Agent 2: Notfall-Umscheduling

```
Kunde schreibt: "Ich muss Samstag 14:00 absagen"
  ↓
Webhook → Make
  ↓
Make: Finde Ersatz-Slot (kommende Tage, anderen Kunden fragen)
  ↓
OpenAI: Schreibe Kontakt-Anfrage an andere Kunden ("Hätten Sie Sa 15:00?")
  ↓
SMS/Email an Alternative-Kunden
  ↓
Beste Match gefunden? → Bestätigung an beide
```

---

**Design-Status:** ✅ APPROVED

Bereit für Implementation-Planung?
