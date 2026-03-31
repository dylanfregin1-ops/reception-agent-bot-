const puppeteer = require('puppeteer');

async function scrapeIndeed() {
  // Demo-Modus mit Testdaten für schnelle Entwicklung
  // In Produktion würde echtes Web-Scraping hier stattfinden
  const mockJobs = [
    {
      title: 'Receptionist / Empfangskraft (m/w/d)',
      company: 'Tech Solutions GmbH',
      jobUrl: 'https://de.indeed.com/jobs?q=rezeptionist&jk=mock1',
      description: 'Wir suchen eine freundliche und organisierte Empfangskraft für unser Büro in Berlin. Aufgaben: Telefonservice, Besucheranmeldung, administrative Aufgaben.',
      source: 'indeed',
      sourceJobId: 'mock1',
    },
    {
      title: 'Front Desk Receptionist - Full Time',
      company: 'Hotel & Eventmanagement',
      jobUrl: 'https://de.indeed.com/jobs?q=rezeptionist&jk=mock2',
      description: 'Wir suchen einen erfahrenen Front Desk Receptionist für unser 4-Sterne Hotel in München.',
      source: 'indeed',
      sourceJobId: 'mock2',
    },
    {
      title: 'Rezeptionistin für Zahnmedizinische Praxis',
      company: 'Zahnarztpraxis Dr. Meyer',
      jobUrl: 'https://de.indeed.com/jobs?q=rezeptionist&jk=mock3',
      description: 'Zahnarztpraxis in Hamburg sucht aufgeschlossene Rezeptionistin für Patientenbetreuung und Verwaltungsaufgaben.',
      source: 'indeed',
      sourceJobId: 'mock3',
    },
    {
      title: 'Receptionist - Administrative Support',
      company: 'Consulting & Business Services',
      jobUrl: 'https://de.indeed.com/jobs?q=rezeptionist&jk=mock4',
      description: 'Wir suchen eine kompetente Rezeptionistin für unser Büro in Köln. Schwerpunkte: Anrufbearbeitung, Terminplanung.',
      source: 'indeed',
      sourceJobId: 'mock4',
    },
    {
      title: 'Medical Receptionist - Clinic',
      company: 'Privatklinik Westend',
      jobUrl: 'https://de.indeed.com/jobs?q=rezeptionist&jk=mock5',
      description: 'Medizinische Rezeptionistin gesucht für Privatpraxis in Frankfurt. Erfahrung mit medizinischen Systemen von Vorteil.',
      source: 'indeed',
      sourceJobId: 'mock5',
    },
  ];

  // Erweitere auf 100 Einträge durch Variation
  const expandedJobs = [];
  const companies = ['Tech Solutions GmbH', 'Hotel & Eventmanagement', 'Zahnarztpraxis Dr. Meyer', 'Consulting & Business Services', 'Privatklinik Westend', 'Corporate Services AG', 'Rechtsanwaltskanzlei Müller', 'Versicherungsbüro Schmidt', 'Immobilienagentur Gold', 'Marketing Agency Pro'];
  const cities = ['Berlin', 'München', 'Hamburg', 'Köln', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig'];

  for (let i = 0; i < 100; i++) {
    const company = companies[i % companies.length];
    const city = cities[i % cities.length];
    expandedJobs.push({
      title: `Receptionist/in - ${city} (${i + 1})`,
      company: company,
      jobUrl: `https://de.indeed.com/jobs?q=rezeptionist&jk=mock${i}`,
      description: `Receptionist/in gesucht in ${city}. Wir suchen eine zuverlässige Person für unseren Empfang.`,
      source: 'indeed',
      sourceJobId: `mock${i}`,
    });
  }

  console.log(`${expandedJobs.length} Test-Leads generiert`);
  return expandedJobs;
}

module.exports = scrapeIndeed;
