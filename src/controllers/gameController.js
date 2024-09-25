const gameUser = require('../models/gameUser');

const increasePoint = async (req, res) => {
 
  const { userId,newScore } = req.body;

  try {
   
    const user = await gameUser.findOne({ userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' }); // User does not exist
    }

    // Update the user's points
    user.points = user.points + newScore; // Assuming points is a field that can be updated
    await user.save(); // Save the updated user object
    
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
const DecreasePoint = async (req, res) => {
 
  const { userId } = req.body;

  try {
   
    const user = await gameUser.findOne({ userId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' }); // User does not exist
    }

    // Update the user's points
    user.points = user.points - 4; // Assuming points is a field that can be updated
    await user.save(); // Save the updated user object
    
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
module.exports = {
  increasePoint,
  DecreasePoint
}