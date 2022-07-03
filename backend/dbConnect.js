const mongoose = require('mongoose');

const URL = 'mongodb+srv://tarun:tarun@cluster0.7qeko.mongodb.net/mern-udemy'

mongoose.connect(URL);

let connectionObj = mongoose.connection

connectionObj.on('connected', () => {
    console.log('MongoDB connection established')
})
connectionObj.on('error', () => {
    console.log('connection error')
})