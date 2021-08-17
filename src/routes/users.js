const express = require('express');
const {profile, signIn, signUp} = require('../controllers/userController');

const router = express.Router();

router.get('/profile', profile);
router.get('/signin', signIn);
router.get('/signup', signUp);

module.exports = router;