const express = require('express');
const cors = require('cors');
const { connect } = require('./db/config');

require('dotenv').config();

// Connection to MongoDB
connect();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle Error across application
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.listen(PORT, () => console.log('server is running on Port: ' + PORT));
