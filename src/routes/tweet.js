const express = require('express');
const passport = require('passport');

const {create} = require('../controllers/tweetController');

const router = express.Router();

router.post('/create', passport.checkAuthentication,create);

module.exports = router;