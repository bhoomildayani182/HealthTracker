const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;

const connectionString = 'mongodb://localhost:27017'
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
// mongodb://localhost:27017