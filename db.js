const mongoose = require("mongoose");
require('dotenv').config();

// Define the MongooseDB connection URL
// const mongoURL = 'mongodb://localhost:27017/hotels';
// const mongoURL=process.env.MONGODB_URL_LOCAL;
// const mongoURL = "mongodb+srv://helloworld:helloworld12234@cluster0.ozwvieh.mongodb.net/hotels?retryWrites=true&w=majority"
const mongoURL = process.env.MONGODB_URL;


// // Set connection
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
