const { Anthropic } = require('@anthropic-ai/sdk');
const templates = require('./templates');
const config = require('../config');

const client = new Anthropic({
  apiKey: config.api.anthropic.apiKey,
});

async function generatePersonalEmail(lead, campaignType) {
  const template = templates[campaignType];
  if (!template) throw new Error(`Unbekannter Kampagnentyp: ${campaignType}`);

  let subject = template.subject
    .replace('{companyName}', lead.company_name || 'Ihrem Unternehmen')
    .replace('{contactName}', lead.contact_name || 'Hallo');

  let body = template.body
    .replace(/{contactName}/g, lead.contact_name || 'Hallo')
    .replace(/{companyName}/g, lead.company_name || 'Ihrem Unternehmen')
    .replace(/{industry}/g, lead.industry || 'Ihrer Branche');

  // Nur personalisieren wenn Anthropic API verfügbar und funktioniert
  if (config.api.anthropic.apiKey && !config.api.anthropic.apiKey.includes('YOUR')) {
    try {
      const message = await client.messages.create({
        model: 'claude-opus-4-6',
        max_tokens: 500,
        messages: [
          {
            role: 'user',
            content: `Verbessere diese Cold-Email, um sie persönlicher zu machen.

Unternehmen: ${lead.company_name}
Kontaktperson: ${lead.contact_name}

Email:
${body}

Gib nur die verbesserte Email zurück.`,
          },
        ],
      });

      body = message.content[0].text;
    } catch (error) {
      console.warn('Claude-Personalisierung fehlgeschlagen:', error.message);
    }
  }

  return {
    subject,
    body,
    campaignType,
    personalizationData: {
      companyName: lead.company_name,
      contactName: lead.contact_name,
      industry: lead.industry,
    },
  };
}

module.exports = generatePersonalEmail;
