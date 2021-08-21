const Tweet = require('../models/tweet');

module.exports.root = function(req, res) {
    Tweet.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err, tweets) {
        console.log(tweets);
        let fetchedTweets = tweets;
        // console.log(tweets);
        if(err) {
            console.log('Error finding tweets');
            fetchedTweets = {};
        }
        return res.render('home', {title: "Twitter", tweets: fetchedTweets});
    });
}