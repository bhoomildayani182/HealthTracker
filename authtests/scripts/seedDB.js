const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://bhoomildayani182:VMPNbCMCGi1VvKzY@cluster0.r2nahar.mongodb.net/test" );

// || 'mongodb+srv://bhoomildayani182:Bhoomil@1234@cluster0.dwaxlxx.mongodb.net/test'process.env.MONGODB_URI