const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.send('User Management System API');
});

module.exports = app;
