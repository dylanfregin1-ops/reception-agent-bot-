const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool({
  connectionString: config.database.connectionString,
});

pool.on('error', (err) => {
  console.error('Fehler bei Datenbank-Verbindung:', err);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  getClient: () => pool.connect(),
};
