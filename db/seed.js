require('dotenv').config();
const { Client } = require('pg');

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text VARCHAR(255), 
        username VARCHAR(30),
        added TIMESTAMP DEFAULT NOW()
    );
    INSERT INTO messages (text, username)
    VALUES 
        ('Hi there!', 'Amando'), 
        ('Hello World!', 'Charles'), 
        ('Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.', 'Jane');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    // this ssl config is only needed for Render deployment
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done.');
}

main();
