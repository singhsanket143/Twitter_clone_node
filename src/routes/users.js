const express = require('express');
const passport = require('passport');
const {
    profile, 
    signIn, 
    signUp, 
    create, 
    update,
    createSession, 
    destroySession} = require('../controllers/userController');

const router = express.Router();

router.get('/profile/:id', passport.checkAuthentication, profile);
router.get('/signin', signIn);
router.get('/signup', signUp);
router.post('/create', create);
router.post('/update/:id', passport.checkAuthentication, update);
router.post('/create-session', passport.authenticate(
    'local',
    { successRedirect: '/',
    failureRedirect: '/signin'}
),createSession);

router.get('/signout', destroySession);

module.exports = router;