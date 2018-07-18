/**
 * Connect to the database
 */
const mongo = require('mongoose');

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bucketlist';

mongo.connect(DB_URI, { useNewUrlParser: true });
mongo.connection.on('connected', () => {
    // db = database;
    console.log('Connected to database');
});
mongo.connection.on('error', (err) => {
    console.error('Database connection failed, make sure mongod is running and try again');
    throw err;
});
