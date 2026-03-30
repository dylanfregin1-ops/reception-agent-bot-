const sgMail = require('@sendgrid/mail');
const db = require('../db');
const config = require('../config');

sgMail.setApiKey(config.api.sendgrid.apiKey);

async function sendEmail(leadId, lead, emailData) {
  try {
    // Im Demo-Modus: Nur in DB speichern ohne tatsächlich zu versenden
    const isDemoMode = !config.api.sendgrid.apiKey || config.api.sendgrid.apiKey.includes('YOUR');
    let sendgridError = null;

    if (!isDemoMode) {
      try {
        const msg = {
          to: lead.contact_email,
          from: config.email.senderEmail,
          subject: emailData.subject,
          html: emailData.body.replace(/\n/g, '<br>'),
          replyTo: config.email.senderEmail,
        };

        await sgMail.send(msg);
      } catch (error) {
        sendgridError = error.message;
        console.warn(`SendGrid Fehler: ${error.message}`);
      }
    }

    // Speichern trotz SendGrid-Fehler
    await db.query(
      `INSERT INTO email_campaigns
       (lead_id, campaign_type, email_subject, email_body, status, sent_at, ai_personalization_data)
       VALUES ($1, $2, $3, $4, $5, NOW(), $6)`,
      [
        leadId,
        emailData.campaignType,
        emailData.subject,
        emailData.body,
        sendgridError ? 'failed' : (isDemoMode ? 'pending' : 'sent'),
        JSON.stringify(emailData.personalizationData),
      ]
    );

    await db.query(
      'UPDATE leads SET status = $1, last_email_sent_at = NOW() WHERE id = $2',
      ['contacted', leadId]
    );

    let statusMsg = '✅ In DB gespeichert';
    if (isDemoMode) statusMsg += ' (Demo-Modus)';
    if (sendgridError) statusMsg += ' (SendGrid: Fehler, siehe Logs)';

    console.log(`Email versendet an ${lead.contact_email} ${statusMsg}`);
    return true;
  } catch (error) {
    console.error(`Fehler beim Versenden an ${lead.contact_email}:`, error.message);
    return false;
  }
}

module.exports = { sendEmail };
