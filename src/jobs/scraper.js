const db = require('../db');
const scrapeIndeed = require('../scrapers/indeed');

async function findDuplicateLead(email) {
  const result = await db.query(
    'SELECT id FROM leads WHERE contact_email = $1',
    [email]
  );
  return result.rows.length > 0;
}

async function saveLead(jobData) {
  const isDuplicate = await findDuplicateLead(jobData.email || 'unknown@email.com');
  if (isDuplicate) {
    console.log(`Lead existiert bereits: ${jobData.email}`);
    return null;
  }

  const query = `
    INSERT INTO leads (
      company_name, company_website, contact_email, contact_name,
      job_posting_url, job_posting_title, job_posting_date,
      source, source_job_id, status
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING id
  `;

  const result = await db.query(query, [
    jobData.company,
    jobData.website || null,
    jobData.email || 'unknown@email.com',
    jobData.contactName || 'HR Manager',
    jobData.jobUrl,
    jobData.title,
    jobData.postedDate || new Date(),
    jobData.source,
    jobData.sourceJobId,
    'new',
  ]);

  return result.rows[0].id;
}

async function runScraper() {
  console.log('Starte Job-Scraper...');

  const jobs = await scrapeIndeed();
  let savedCount = 0;

  for (const job of jobs) {
    const leadId = await saveLead(job);
    if (leadId) {
      savedCount++;
      console.log(`Lead gespeichert: ${job.company}`);
    }
  }

  console.log(`Scraper abgeschlossen. ${savedCount} neue Leads gespeichert.`);
}

if (require.main === module) {
  runScraper().catch(console.error);
}

module.exports = runScraper;
