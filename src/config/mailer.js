const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    servide: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
});

let mailTemplate = function(data, path) {
    var mailerTemplate;
    ejs.renderFile(
        path.join(__dirname+'../views/mailers', path),
        data,
        function(err, template) {
            if(err) {
                console.error(err);
                return;
            }
            mailerTemplate = template;
        }
    );
    return mailerTemplate;
}

module.exports = {transporter, mailTemplate};