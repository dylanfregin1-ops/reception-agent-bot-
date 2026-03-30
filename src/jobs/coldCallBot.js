const db = require('../db');
const { initiateVoiceCall } = require('../calling/voiceAgent');

async function getLeadsReadyForCalling() {
  const result = await db.query(
    `SELECT leads.*
     FROM leads
     WHERE leads.status = $1
     AND leads.contact_phone IS NOT NULL
     AND leads.call_attempted_at IS NULL
     ORDER BY leads.score DESC
     LIMIT 5`,
    ['contacted']
  );

  return result.rows;
}

async function runColdCallCampaign() {
  console.log('Starte Cold-Call-Kampagne...');

  const leads = await getLeadsReadyForCalling();

  for (const lead of leads) {
    const result = await initiateVoiceCall(lead);

    if (result.success) {
      console.log(`Anruf initiiert für ${lead.contact_name}`);
    } else {
      console.log(`Anruf fehlgeschlagen für ${lead.contact_name}: ${result.error}`);
    }

    // Rate-Limiting: 1 Minute Abstand
    await new Promise(resolve => setTimeout(resolve, 60000));
  }

  console.log(`Cold-Call-Kampagne abgeschlossen. ${leads.length} Anrufe versucht.`);
}

if (require.main === module) {
  runColdCallCampaign().catch(console.error);
}

module.exports = runColdCallCampaign;
