const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function getDetailsByMessage(messageId) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    messageId,
  ]);
  return rows[0];
}

async function insertNewMessage(message, userName) {
  await pool.query('INSERT INTO messages (text, username) VALUES ($1, $2)', [
    message,
    userName,
  ]);
}

module.exports = {
  getAllMessages,
  getDetailsByMessage,
  insertNewMessage,
};
