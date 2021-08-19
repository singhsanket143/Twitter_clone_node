const Tweet = require('../models/tweet');

module.exports.root = function(req, res) {
    Tweet.find({}).populate('user').exec(function(err, tweets) {
        let fetchedTweets = tweets;
        console.log(tweets);
        if(err) {
            console.log('Error finding tweets');
            fetchedTweets = {};
        }
        return res.render('home', {title: "Twitter", tweets: fetchedTweets});
    });
}