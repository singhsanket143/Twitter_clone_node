const setFlash = function(req, res, next) {
    res.locals.flash = {
        'success': req.flash('success'),
        'error': req.flash('error'),
        'info': req.flash('info'),
        'tweet-create': req.flash('tweet-create')
    }
    next();
}

module.exports = {setFlash};