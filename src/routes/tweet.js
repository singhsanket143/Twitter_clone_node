const express = require('express');
const {create} = require('../controllers/tweetController');

const router = express.Router();

router.post('/create', create);

module.exports = router;