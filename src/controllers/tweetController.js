const Tweet = require('../models/tweet');
const Comment = require('../models/comment');
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

const destroy = function(req, res) {
    console.log("Hit");
    Tweet.findById(req.params.id, function(err, tweet) {
        if(err) {
            return res.redirect('/');
        }
        if(tweet.user == req.user.id) {
            tweet.remove();
            Comment.deleteMany({tweet: req.params.id}, function(err) {
                return res.redirect('back');
            });
        } else {
            return res.redirect('back');
        }
    })
}
module.exports = {create, destroy};
