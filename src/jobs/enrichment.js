const db = require('../db');
const findEmail = require('../enrichment/hunterIo');

async function enrichLead(lead) {
  try {
    let domain = null;

    if (lead.company_website) {
      try {
        const urlObj = new URL(lead.company_website.startsWith('http') ? lead.company_website : `https://${lead.company_website}`);
        domain = urlObj.hostname.replace('www.', '');
      } catch {
        domain = null;
      }
    }

    if (!domain && lead.contact_email && lead.contact_email !== 'unknown@email.com') {
      domain = lead.contact_email.split('@')[1];
    }

    if (domain && (!lead.contact_email || lead.contact_email === 'unknown@email.com')) {
      const email = await findEmail(domain, 'HR', 'Manager');
      return {
        ...lead,
        company_website: domain,
        contact_email: email,
        enriched_at: new Date(),
      };
    }

    return {
      ...lead,
      company_website: lead.company_website || domain,
      enriched_at: new Date(),
    };
  } catch (error) {
    console.error(`Fehler beim Enrichment von Lead ${lead.id}:`, error.message);
    return lead;
  }
}

async function runEnrichment() {
  console.log('Starte Lead-Enrichment...');

  const result = await db.query(
    'SELECT * FROM leads WHERE status = $1 LIMIT 100',
    ['new']
  );

  const leads = result.rows;
  let enrichedCount = 0;

  for (const lead of leads) {
    const enriched = await enrichLead(lead);

    await db.query(
      `UPDATE leads SET
        company_website = $1,
        contact_email = $2,
        updated_at = NOW()
       WHERE id = $3`,
      [enriched.company_website, enriched.contact_email, lead.id]
    );

    enrichedCount++;
    console.log(`Angereichert: ${enriched.company_website} -> ${enriched.contact_email}`);
  }

  console.log(`Enrichment abgeschlossen. ${enrichedCount} Leads aktualisiert.`);
}

if (require.main === module) {
  runEnrichment().catch(console.error);
}

module.exports = runEnrichment;
