module.exports.root = function(req, res) {
    return res.render('home', {title: "Twitter"});
}