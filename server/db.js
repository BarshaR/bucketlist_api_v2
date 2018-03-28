const mongo = require('mongoose');

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bucketlist';

let db;

mongo.connect(DB_URI, (err, database) => {
    if (err) {
        console.error('Database connection failed, make sure mongod is running and try again');
        throw err;
    }
    db = database;
    console.log('Connected to database');
});
