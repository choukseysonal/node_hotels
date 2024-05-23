const mongoose = require("mongoose");

// Define the MongooseDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';

// Set connection
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});
db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;