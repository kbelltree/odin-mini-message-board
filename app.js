require('dotenv').config();
const express = require('express');
const path = require('node:path');
const app = express();
const index = require('./routes/index');

const assetPath = path.join(__dirname, 'public');
app.use(express.static(assetPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', index);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mini Message Board app - listening on port ${PORT}`);
});
