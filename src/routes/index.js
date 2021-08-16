const express = require('express');

const homeController = require('../controllers/homeController');
const userRouter = require('./users');

const router = express.Router();
console.log('Router UP!');

router.get('/', homeController.root);
router.use('/users', userRouter);


module.exports = router;