require ('dotenv').config ();
const express = require ('express');
const bodyParser = require ('body-parser');
const app = express ();
const path = require ('path');
const PORT = process.env.PORT || 3000;
const cors = require ('cors');
const connectDB = require ('./config/db');

// Connection to the database
connectDB ();

const users = [
  {username: 'user1', password: 'password1'},
  {username: 'user2', password: 'password2'},
];

app.post ('/login', (req, res) => {
  const {username, password} = req.body;

  // Find user by username
  const user = users.find (u => u.username === username);

  // Check if the user exists and the password is correct
  if (user && user.password === password) {
    res.json ({message: 'Login successful'});
  } else {
    res.status (401).json ({message: 'Invalid credentials'});
  }
});

// const corsOptions = {
//   origin: process.env.ALLOWED_CLIENTS.split (','),
// };

// Middlewares
app.use (cors ());
app.use (express.static ('public'));
app.use (express.json ());
app.use (bodyParser.json ());

// Template engine
app.set ('views', path.join (__dirname, '/views'));
app.set ('view engine', 'jsx');
app.engine ('jsx', require ('express-react-views').createEngine ());

//Routes
app.use ('/api/files', require ('./routes/files'));
app.use ('/files', require ('./routes/show'));
app.use ('/files/download', require ('./routes/download'));

app.listen (PORT, () => {
  console.log (`App is listening on port ${PORT}`);
});
