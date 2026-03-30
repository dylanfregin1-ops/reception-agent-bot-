const express = require('express');
const config = require('./config');

const app = express();

app.use(express.json());

// Health-Check Endpunkt
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Placeholder-Routes (werden später implementiert)
app.use('/api/leads', require('./routes/leads'));
app.use('/api/emails', require('./routes/emails'));
app.use('/api/calls', require('./routes/calls'));

app.listen(config.app.port, () => {
  console.log(`Server läuft auf Port ${config.app.port} im ${config.app.nodeEnv} Modus`);
});

module.exports = app;
