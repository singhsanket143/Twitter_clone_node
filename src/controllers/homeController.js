const Tweet = require('../models/tweet');
const User = require('../models/user');

module.exports.root = function(req, res) {
    Tweet.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(async function(err, tweets) {
        console.log(tweets);
        let fetchedTweets = tweets;
        // console.log(tweets);
        const users = await User.find({});
        console.log(users);
        if(err) {
            console.log('Error finding tweets');
            fetchedTweets = {};
        }
        return res.render('home', {
            title: "Twitter", 
            tweets: fetchedTweets,
            users: users
        });
    });
}