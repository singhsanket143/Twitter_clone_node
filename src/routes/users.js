const express = require('express');
const passport = require('passport');
const multer  = require('multer')
const upload = multer({ dest: './src/uploads/' })
const {
    profile, 
    signIn, 
    signUp, 
    create, 
    update,
    updateAvatar,
    getAvatar,
    createSession, 
    destroySession} = require('../controllers/userController');

const router = express.Router();

router.get('/profile/:id', passport.checkAuthentication, profile);
router.get('/signin', signIn);
router.get('/signup', signUp);
router.get('/images/:key', getAvatar);
router.post('/create', create);
router.post('/update/:id', passport.checkAuthentication, update);
router.post('/updateAvatar', passport.checkAuthentication, upload.single('avatar'), updateAvatar);
router.post('/create-session', passport.authenticate(
    'local',
    {
    failureRedirect: '/signin'}
),createSession);

router.get('/signout', destroySession);

module.exports = router;