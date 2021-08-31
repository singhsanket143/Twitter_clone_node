const queue = require('../config/queue');
const { newCommentMailer } = require('../mailers/comments_mailer');


queue.process('email', function(job, done) {
    console.log('Email worker started !!!', job.data);
    newCommentMailer(job.data);
    done();
});