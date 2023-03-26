const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://bhoomildayani182:Bhoomil@1234@cluster0.dwaxlxx.mongodb.net/test');

