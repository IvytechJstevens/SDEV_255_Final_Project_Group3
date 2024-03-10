// import cors from 'cors';

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();

app.options('*', cors());

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', UserSchema);

app.use(cors());

app.use(express.json());

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const user = new User({ username, password });
  await user.save();

  const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });

  res.send({ token });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(400).send('Invalid username or password');
  }

  const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });

  res.send({ token });
});

mongoose.connect('mongodb+srv://DavidBowman:Luid469n@cluster0.1a2nyln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000, () => console.log('Server running on http://localhost:3000')))
  .catch(err => console.error(err));