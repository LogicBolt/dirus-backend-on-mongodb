const User = require('../models/User');

const getUser = async (req, res) => {
  const { userId } = req.params;
  const { userName, startParam } = req.query;

  try {
    console.log("Received userId:", userId, userName, startParam);

    const user = await User.findOne({ userId });

    if (user) {
      console.log("user is existed")
      return res.json({ is_new: false });
    } else {
      console.log("new user coming")
      // Create a new user since none was found
      const newUser = new User({
        userId,
        userName,
        createAt : Date.now(),
        points: 5000,
        referer: startParam || 'self',  // Get the referer from headers if available
      });
      console.log(newUser)
      await newUser.save();
      return res.status(201).json({ is_new: true });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};
const updatePoint = async (req, res) => {
  const { userId, value } = req.body;
  try {
    console.log("Received userId:", userId, value,);

    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' }); // User does not exist
    }

    // Update the user's points
    user.points = value; // Assuming points is a field that can be updated
    await user.save(); // Save the updated user object

    // Send response with updated user info or success message
    return res.status(200).json({ message: 'Points updated successfully', user });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
const getFriends = async (req, res) => {
  const { referer } = req.query;

  console.log("Received refere:", referer, typeof referer);

  try {
    const friends = await User.find({ referer : referer  }).select('userId userName points');
    res.json(friends);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching friends' });
  }

}
const getLeaderboard = async (req, res) => {
  const { userId } = req.query;

  console.log("leaderboard userid ",userId);

  try {
    const topUsers = await User.find({  }).select('userId userName points').sort({ points : -1 })
    .limit(50);

    const myScoreUser = await User.findOne({ userId: userId });

    res.json({
      topUsers: topUsers,
      myScore: myScoreUser.points
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error fetching friends' });
  }

}

module.exports = { getUser, updatePoint, getFriends, getLeaderboard };
