const axios = require('axios');
const config = require('../config');

async function findEmail(domain, firstName, lastName) {
  if (!config.api.hunterIo.apiKey) {
    console.warn('Hunter.io API Key nicht konfiguriert');
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
  }

  try {
    const response = await axios.get('https://api.hunter.io/v2/email-finder', {
      params: {
        domain,
        first_name: firstName,
        last_name: lastName,
        api_key: config.api.hunterIo.apiKey,
      },
    });

    if (response.data.data?.email) {
      return response.data.data.email;
    }

    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
  } catch (error) {
    console.error(`Fehler beim Finden der Email für ${domain}:`, error.message);
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
  }
}

module.exports = findEmail;
