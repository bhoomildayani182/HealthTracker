const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;
//MONGO_URL = 'mongodb+srv://bhoomildayani182:TPb6XdgKa2sm38hY@cluster0.kck3zgu.mongodb.net/'
const connectionString = 'mongodb+srv://bhoomildayani182:TPb6XdgKa2sm38hY@cluster0.kck3zgu.mongodb.net/'
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
// || process.env.MONGODB_URI
// mongodb+srv://bhoomildayani182:TPb6XdgKa2sm38hY@cluster0.kck3zgu.mongodb.net/