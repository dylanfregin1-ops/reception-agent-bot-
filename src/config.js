require('dotenv').config();

module.exports = {
  database: {
    connectionString: process.env.DATABASE_URL,
  },
  api: {
    anthropic: {
      apiKey: process.env.ANTHROPIC_API_KEY,
    },
    sendgrid: {
      apiKey: process.env.SENDGRID_API_KEY,
    },
    elevenLabs: {
      apiKey: process.env.ELEVEN_LABS_API_KEY,
    },
    openai: {
      apiKey: process.env.OPENAI_API_KEY,
    },
    google: {
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_OAUTH_REDIRECT_URI,
    },
    calendly: {
      token: process.env.CALENDLY_API_TOKEN,
    },
    hunterIo: {
      apiKey: process.env.HUNTER_IO_API_KEY,
    },
  },
  email: {
    senderEmail: process.env.SENDER_EMAIL,
    senderName: process.env.SENDER_NAME,
  },
  app: {
    port: parseInt(process.env.PORT || '3000'),
    nodeEnv: process.env.NODE_ENV || 'development',
    logLevel: process.env.LOG_LEVEL || 'info',
  },
};
