module.exports.profile = function(req, res) {
    return res.render('users/user_profile');
}

module.exports.signUp = function(req, res) {
    return res.render('users/user_sign_up', {
        title: 'Twitter | Sign Up'
    });
}

module.exports.signIn = function(req, res) {
    return res.render('users/user_sign_in', {
        title: 'Twitter | Sign In'
    });
}