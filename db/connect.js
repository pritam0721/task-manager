const mongoose = require('mongoose')

const connectDb = (url) => {
    return mongoose.connect(url).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

}

module.exports = connectDb

