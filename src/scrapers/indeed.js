const puppeteer = require('puppeteer');

async function scrapeIndeed() {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64)');

    // Receptionist Jobs in Deutschland
    const searchUrl = 'https://de.indeed.com/jobs?q=rezeptionist&limit=50';
    await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 30000 });

    const jobs = await page.evaluate(() => {
      const jobElements = Array.from(document.querySelectorAll('[data-job-id]'));
      return jobElements.map(element => {
        const titleElement = element.querySelector('h2 a');
        const companyElement = element.querySelector('[data-company-name]');
        return {
          title: titleElement?.textContent?.trim() || '',
          company: companyElement?.textContent?.trim() || '',
          jobUrl: titleElement?.href || '',
          description: element.textContent?.slice(0, 500) || '',
          source: 'indeed',
          sourceJobId: element.getAttribute('data-job-id'),
        };
      });
    });

    const receptionistJobs = jobs.filter(job =>
      /receptionist|front.?desk|reception/i.test(job.title.toLowerCase())
    );

    console.log(`${receptionistJobs.length} Rezeptionist-Jobs auf Indeed gefunden`);
    return receptionistJobs;

  } catch (error) {
    console.error('Fehler beim Scrapen von Indeed:', error.message);
    return [];
  } finally {
    if (browser) await browser.close();
  }
}

module.exports = scrapeIndeed;
