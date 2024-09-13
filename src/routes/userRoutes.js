const express = require('express');
const { getUser } = require('../controllers/userController');
const router = express.Router();

router.get('/:userId', getUser); // GET user by userId

module.exports = router;
