const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use(new localStrategy({
    usernameField: 'email'
}, function(email, password, done) {
    User.findOne({email: email}, function(err, user) {
        if(err) {
            console.log('Error finding the user');
            return done(err);
        }
        if(!user || user.password != password) {
            console.log('Invalid Password');
            return done(null, false);
        }
        return done(null, user);
    })
}
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        if(err) {
            console.log('Error in finding user');
            return done(err);
        }
      done(null, user);
    });
  });
  

passport.checkAuthentication = function(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/users/signin');
}

passport.setAuthenticatedUser = function(req, res, next) {
    console.log(req);
    if(req.isAuthenticated()) {
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;