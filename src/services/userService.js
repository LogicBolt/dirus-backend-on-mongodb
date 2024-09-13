// Placeholder for user logic; this can handle all user-related business logic
const User = require('../models/User');

const findUserById = async (userId) => {
  return await User.findOne({ userId });
};

module.exports = { findUserById };
