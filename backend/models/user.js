const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        trim: true, 
        required: true
    }, 
    email: {
        type: String, 
        trim: true, 
        required: true, 
        unique: true, 
        lowercase: true
    }, 
    imageURL: {
        type: String, 
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema)
