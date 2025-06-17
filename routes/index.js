const { Router } = require('express');
const messageManager = require('../controllers/messageManager');
const indexRouter = Router();

indexRouter.get('/', messageManager.getStoredMessages);

indexRouter.get('/new', messageManager.createNewMessageGet);

indexRouter.get('/details/:id', messageManager.getMessageDetails);

indexRouter.post('/new', messageManager.createNewMessagePost);

module.exports = indexRouter;
