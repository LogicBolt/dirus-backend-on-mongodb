const express = require('express');
const { getUser, updatePoint } = require('../controllers/userController');
const router = express.Router();

router.get('/:userId', getUser); // GET user by userId
router.post('/update_point', updatePoint);
module.exports = router;
