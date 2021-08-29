const mailer = require('../config/mailer');

const newCommentMailer = function(tweet) {
    console.log(tweet);
    mailer.transporter.sendMail({
        from: '"Twitter 🐥" <comments@twitter.com>', // sender address
        to: tweet.user.email, // list of receivers
        subject: "New Comment On Your Tweet ✔", // Subject line
        html: "<b>New Comment on The Tweet</b>", // html body
    }, (err, info) => {
        if(err) {
            console.error(err);
            return;
        }
        console.log('Email Sent');
        return;
    });
}

module.exports = {newCommentMailer};