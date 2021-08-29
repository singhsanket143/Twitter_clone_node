const Tweet = require('../models/tweet');
const User = require('../models/user');

module.exports.root = async function(req, res) {
    try {
        const tweets = await Tweet.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        }).sort({"createdAt": -1}).exec();
        // console.log(tweets);
        let fetchedTweets = tweets;
        // console.log(tweets);
        const users = await User.find({});
        // console.log(users);
        
        return res.render('home', {
            title: "Twitter", 
            tweets: fetchedTweets,
            users: users
        });
    } catch(err) {
        console.error(err);
        return;
    }
}