const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        maxLength: 300,
        minLength: 5
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;