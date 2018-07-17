const mongoose = require('mongoose');

const { Schema } = mongoose;

// To fix https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
})

module.exports = mongoose.model('User', userSchema);