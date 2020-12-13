const mongoose = require('mongoose');
const db = require('../backend/models');

mongoose.connect(
  process.env.MONGODB_URI || 'mongod://localhost/googoobooksearch'
);