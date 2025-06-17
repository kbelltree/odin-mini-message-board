const { Pool } = require('pg');

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  // this ssl config is only needed for Render deployment
  ssl: { rejectUnauthorized: false },
});
