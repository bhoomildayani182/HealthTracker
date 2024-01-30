const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;

const connectionString = 'mongodb+srv://bhoomildayani182:TPb6XdgKa2sm38hY@cluster0.kck3zgu.mongodb.net/'
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
// mongodb+srv://bhoomildayani182:TPb6XdgKa2sm38hY@cluster0.kck3zgu.mongodb.net/





// mongodb+srv://bhoomildayani182:TPb6XdgKa2sm38hY@cluster0.kck3zgu.mongodb.net/



//TPb6XdgKa2sm38hY
// mongodb+srv://bhoomildayani182:TPb6XdgKa2sm38hY@cluster0.kck3zgu.mongodb.net/</password>
// mongodb+srv://bhoomildayani182:<password>@cluster0.kck3zgu.mongodb.net/
    