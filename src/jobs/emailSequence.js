const db = require('../db');
const generatePersonalEmail = require('../email/personalization');
const { sendEmail } = require('../email/sender');

async function getNextEmailToSend() {
  const result = await db.query(
    `SELECT DISTINCT leads.*
     FROM leads
     WHERE leads.status IN ('new', 'contacted')
     AND NOT EXISTS (
       SELECT 1 FROM email_campaigns
       WHERE email_campaigns.lead_id = leads.id
       AND email_campaigns.campaign_type = $1
     )
     LIMIT 10`,
    ['initial_outreach']
  );

  return result.rows;
}

async function sendNextEmailSequence() {
  const leads = await getNextEmailToSend();

  for (const lead of leads) {
    const emailData = await generatePersonalEmail(lead, 'initial_outreach');
    const sent = await sendEmail(lead.id, lead, emailData);

    if (sent) {
      console.log(`Initiale Email versendet an ${lead.contact_email}`);
    }
  }

  console.log(`${leads.length} Leads mit Email-Sequenz verarbeitet`);
}

async function runEmailSequence() {
  console.log('Starte Email-Sequenz-Automatisierung...');
  await sendNextEmailSequence();
  console.log('Email-Sequenz abgeschlossen');
}

if (require.main === module) {
  runEmailSequence().catch(console.error);
}

module.exports = runEmailSequence;
