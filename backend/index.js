const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const connectDB = require('./connect_db/connect_db');

connectDB();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));

  app.use(express.static(path.join(__dirname, '../')));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Serveur en cours d'exécution sur le port ${process.env.PORT || 3000}`);
});