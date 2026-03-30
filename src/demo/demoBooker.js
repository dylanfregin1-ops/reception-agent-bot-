const db = require('../db');
const { generatePersonalEmail } = require('../email/personalization');
const { sendEmail } = require('../email/sender');

async function getLeadsQualifiedForDemo() {
  const result = await db.query(
    `SELECT leads.*
     FROM leads
     WHERE leads.status = $1
     AND leads.score >= $2
     AND leads.demo_scheduled_at IS NULL
     AND leads.call_status = $3
     ORDER BY leads.score DESC
     LIMIT 5`,
    ['contacted', 70, 'qualified']
  );

  return result.rows;
}

async function bookDemoForLead(lead) {
  try {
    // Für MVP: Simuliere Demo-Booking
    const demoTime = new Date();
    demoTime.setDate(demoTime.getDate() + 1);
    demoTime.setHours(10, 0, 0, 0);

    // Update Lead
    await db.query(
      `UPDATE leads
       SET status = $1, demo_scheduled_at = $2, updated_at = NOW()
       WHERE id = $3`,
      ['demo_booked', demoTime, lead.id]
    );

    console.log(`Demo gebucht für ${lead.contact_email} um ${demoTime.toLocaleString('de-DE')}`);
    return true;
  } catch (error) {
    console.error(`Fehler beim Buchen für ${lead.contact_email}:`, error.message);
    return false;
  }
}

async function runDemoBooking() {
  console.log('Starte Demo-Buchungs-Automatisierung...');

  const leads = await getLeadsQualifiedForDemo();

  for (const lead of leads) {
    const booked = await bookDemoForLead(lead);
    if (booked) {
      console.log(`Demo gebucht für ${lead.company_name}`);
    }
  }

  console.log(`Demo-Buchung abgeschlossen. ${leads.length} Demos gebucht.`);
}

if (require.main === module) {
  runDemoBooking().catch(console.error);
}

module.exports = runDemoBooking;
