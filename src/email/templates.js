const templates = {
  initial_outreach: {
    subject: `Eine KI-Lösung für Ihre Rezeption - {companyName}`,
    body: `Hallo {contactName},

ich habe gesehen, dass {companyName} gerade eine Rezeptionistin / einen Rezeptionisten sucht.

Viele kleine Unternehmen kämpfen mit den klassischen Rezeptionsaufgaben:
- Anrufe entgegennehmen und weiterleiten
- Termine vereinbaren
- Anfragen beantworten

Wir haben eine KI-Lösung entwickelt, die diese Aufgaben 24/7 übernimmt - ohne Personal.

Interessiert?

Beste Grüße`,
  },
  follow_up_1: {
    subject: `Kurze Frage zu {companyName}`,
    body: `Hallo {contactName},

ich wollte nur kurz nachfragen: Haben Sie meine letzte E-Mail erhalten?

Falls Sie interessiert sind, können wir in 15 Minuten einen schnellen Demo-Call machen.

Beste Grüße`,
  },
  follow_up_2: {
    subject: `Letzter Versuch - KI-Rezeption für {companyName}`,
    body: `Hallo {contactName},

das wird meine letzte E-Mail zu diesem Thema.

Falls Sie Stress mit der Rezeption hatten - wir haben exakt dafür eine Lösung.

Viel Erfolg weiterhin!`,
  },
};

module.exports = templates;
