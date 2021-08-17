const express = require('express');
const passport = require('passport');
const {profile, signIn, signUp, create, createSession} = require('../controllers/userController');

const router = express.Router();

router.get('/profile', profile);
router.get('/signin', signIn);
router.get('/signup', signUp);
router.post('/create', create);

router.post('/create-session', passport.authenticate(
    'local',
    { successRedirect: '/',
    failureRedirect: '/signin'}
),createSession);

module.exports = router;