const express = require('express');
const passport = require('passport');

const {toggleLike} = require('../controllers/likesController');

const router = express.Router();

router.get('/toggle', passport.checkAuthentication, toggleLike);
module.exports = router;