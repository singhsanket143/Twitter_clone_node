const Tweet = require('../models/tweet');

const create = function(req, res) {
    Tweet.create({
        content: req.body.content,
        user: req.user._id
    }, function(err, tweet) {
        if(err) {
            console.error("Error in creating a tweet");
            return;
        }
        return res.redirect('back');
    })
}

module.exports = {create};
