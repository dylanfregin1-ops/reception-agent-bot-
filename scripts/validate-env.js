#!/usr/bin/env node

require('dotenv').config();

const requiredKeys = [
  'DATABASE_URL',
  'ANTHROPIC_API_KEY',
  'OPENAI_API_KEY',
  'SENDGRID_API_KEY',
  'SENDER_EMAIL',
];

const optionalKeys = [
  'ELEVEN_LABS_API_KEY',
  'HUNTER_IO_API_KEY',
  'GOOGLE_OAUTH_CLIENT_ID',
  'GOOGLE_OAUTH_CLIENT_SECRET',
  'CALENDLY_API_TOKEN',
];

console.log('🔍 Validiere Umgebungsvariablen...\n');

const missing = {
  required: [],
  optional: [],
};

requiredKeys.forEach(key => {
  if (!process.env[key] || process.env[key].includes('YOUR_KEY')) {
    missing.required.push(key);
    console.log(`❌ ${key} - FEHLT`);
  } else {
    const masked = process.env[key].substring(0, 10) + '...';
    console.log(`✅ ${key} - OK (${masked})`);
  }
});

console.log('\n📋 Optional Keys:\n');

optionalKeys.forEach(key => {
  if (!process.env[key] || process.env[key].includes('YOUR')) {
    missing.optional.push(key);
    console.log(`⚠️  ${key} - nicht gesetzt (optional)`);
  } else {
    const masked = process.env[key].substring(0, 10) + '...';
    console.log(`✅ ${key} - OK (${masked})`);
  }
});

console.log('\n' + '='.repeat(50));

if (missing.required.length === 0) {
  console.log('✅ Alle erforderlichen Keys sind gesetzt!\n');
  process.exit(0);
} else {
  console.log(`\n❌ ${missing.required.length} erforderliche Keys fehlen:\n`);
  missing.required.forEach(key => {
    console.log(`   • ${key}`);
  });
  console.log('\n📖 Siehe .env.example für Anleitung zum Beschaffen der Keys\n');
  process.exit(1);
}
