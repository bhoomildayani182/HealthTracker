const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;
//MONGO_URL = 'mongodb://localhost:27017'
const connectionString = 'mongodb://localhost:27017'
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
// || process.env.MONGODB_URI
// mongodb://localhost:27017