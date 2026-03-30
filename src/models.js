/**
 * Model Konfiguration - Günstige/schnelle Modelle für kostenoptimiert
 *
 * Alle Modelle sind gewählt für:
 * ✅ Niedrigen Token-Verbrauch
 * ✅ Schnelle Antworten
 * ✅ Günstige Preise
 */

module.exports = {
  // Claude Models (Anthropic)
  claude: {
    // Haiku: Super schnell & günstig - für einfache Aufgaben
    fast: 'claude-3-5-haiku-20241022',
    maxTokens: {
      fast: 300,
    },
  },

  // OpenAI Models
  openai: {
    // GPT-4o Mini: Günstig & schnell - für Voice & allgemeine Aufgaben
    fast: 'gpt-4o-mini',
    maxTokens: {
      fast: 300,
    },
  },

  // Verwendungsbeispiele:
  //
  // Claude für Email-Personalisierung:
  // const client = new Anthropic({ apiKey });
  // await client.messages.create({
  //   model: models.claude.fast,
  //   max_tokens: models.claude.maxTokens.fast,
  //   ...
  // });
  //
  // OpenAI für Voice:
  // const response = await openai.audio.speech.create({
  //   model: models.openai.fast,
  //   ...
  // });
};
