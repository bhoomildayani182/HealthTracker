const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;
//MONGO_URL = "mongodb+srv://bhoomildayani182:G6PQZst71S7vYzJE@cluster1.lad4l0x.mongodb.net/test"
 mongoose.connect("mongodb+srv://bhoomildayani182:G6PQZst71S7vYzJE@cluster1.lad4l0x.mongodb.net/test");

// || process.env.MONGODB_URI
// mongodb+srv://bhoomildayani182:G6PQZst71S7vYzJE@cluster1.lad4l0x.mongodb.net/test