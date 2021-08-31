const Comment = require('../models/comment');
const Tweet = require('../models/tweet');
const commentsEmailWorker = require('../workers/commentMailerWorker');
const queue = require('../config/queue');

const {newCommentMailer} = require('../mailers/comments_mailer');
const create = async function(req, res) {
    // console.log(req.body);
    try {
        const tweet = await Tweet.findById(req.body.tweet).populate('user');
        const comment = await Comment.create({
            content: req.body.content,
            tweet: req.body.tweet,
            user: req.user._id
        });
        tweet.comments.push(comment);
        tweet.save();
        // newCommentMailer(tweet);
        let job = queue.create('email', tweet).save(function(err) {
            if(err) {
                console.error("********QUEUE ERROR************");
                console.error(err);
                return;
            }
            console.log("Email Enqueued", job.id);
        })
        return res.redirect('/');

    } catch(err) {
        console.error(err);
        return res.redirect('/');
    }
}

const destroy = function(req, res) {
    // console.log(req);
    Comment.findById(req.params.id, function(err, comment) {
        if(!comment) {
            return res.redirect('back');
        }
        if(comment.user == req.user.id) {
            let tweetId = comment.tweet;
            comment.remove();
            Tweet.findByIdAndUpdate(tweetId, { $pull: {comments: req.params.id}} , function(err, tweet) {
                return res.redirect('back');
            })
        } else {
            return res.redirect('back');
        }
        
    });
}

module.exports = {create, destroy};