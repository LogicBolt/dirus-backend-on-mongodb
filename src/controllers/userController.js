const User = require('../models/User');

const getUser = async (req, res) => {
  const { userId } = req.params;
  const {  userName, startParam } = req.query;

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
        is_new: true,
        points: 500,
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
        console.log("Received userId:", userId, value, );
    
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
            is_new: true,
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
}
module.exports = { getUser,updatePoint };
