module.exports.profile = function(req, res) {
    return res.render('users/user_profile', {layout: __dirname+'/../../src/views/layouts/user_layout'});
}