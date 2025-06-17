// move all the get post callbacks into here and declare as named function
// then import into index.js

const db = require('../db/queries');

async function getStoredMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { title: 'Mini Message Board', messages: messages });
}

async function getMessageDetails(req, res) {
  const { id } = req.params;
  const details = await db.getDetailsByMessage(id);
  res.render('details', { message: details });
}

function createNewMessageGet(req, res) {
  res.render('form');
}

async function createNewMessagePost(req, res) {
  const { messageText, messageUser } = req.body;
  await db.insertNewMessage(messageText, messageUser);
  res.redirect('/');
}

module.exports = {
  getStoredMessages,
  getMessageDetails,
  createNewMessageGet,
  createNewMessagePost,
};
