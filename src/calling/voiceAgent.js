const db = require('../db');
const config = require('../config');

async function generateCallScript(lead) {
  return `Guten Tag ${lead.contact_name},

ich rufe an, weil ich sehe, dass ${lead.company_name} gerade eine Rezeptionistin sucht.

Viele Unternehmen kämpfen mit der Rezeption. Wir haben eine KI-Lösung, die Anrufe 24/7 annimmt.

Hätten Sie kurz Zeit für einen schnellen Demo-Call?`;
}

async function initiateVoiceCall(lead) {
  try {
    const script = await generateCallScript(lead);

    const callResult = await db.query(
      `INSERT INTO call_logs (lead_id, call_status)
       VALUES ($1, $2)
       RETURNING id`,
      [lead.id, 'initiated']
    );

    const callId = callResult.rows[0].id;
    console.log(`Anruf initiiert für ${lead.contact_name} unter ${lead.contact_phone}`);

    await db.query(
      `UPDATE leads
       SET call_attempted_at = NOW(), call_status = $1
       WHERE id = $2`,
      ['not_called', lead.id]
    );

    return { success: true, callId, script };
  } catch (error) {
    console.error(`Fehler beim Anruf für ${lead.contact_name}:`, error.message);
    return { success: false, error: error.message };
  }
}

module.exports = { initiateVoiceCall };
