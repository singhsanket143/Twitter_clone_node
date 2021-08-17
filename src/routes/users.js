const express = require('express');
const {profile, signIn, signUp, create} = require('../controllers/userController');

const router = express.Router();

router.get('/profile', profile);
router.get('/signin', signIn);
router.get('/signup', signUp);
router.post('/create', create);

module.exports = router;