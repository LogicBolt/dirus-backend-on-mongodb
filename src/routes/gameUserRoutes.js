const express = require('express');
const {
  getUser, 
       updatePoint,
       getFriends,
       // getLeaderboard 
      } = require('../controllers/gameUserController');
const router = express.Router();

router.get('/info/:userId', getUser); // GET user by userId
router.post('/update_point', updatePoint);
router.get('/friends', getFriends);
// router.get('/leaderboard', getLeaderboard);
module.exports = router;
