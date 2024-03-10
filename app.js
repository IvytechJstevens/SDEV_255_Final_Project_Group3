// import cors from 'cors';

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(express.json());

// Serve static files from the 'Views' directory
app.use(express.static(path.join(__dirname, 'Public')));

// Define MongoDB connection URI
const mongoURI = 'mongodb+srv://DavidBowman:Luid469n@cluster0.1a2nyln.mongodb.net/myDatabase';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server once connected to MongoDB
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Route handler for serving HTML files other than index.html
app.get('/:page', (req, res) => {
  const page = req.params.page;
  res.sendFile(path.join(__dirname, 'Public', page));
});

// Route handler for serving index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});
