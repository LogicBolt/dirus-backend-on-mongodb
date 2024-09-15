const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  
  points: { type: Number, default: 5000 },
  referer : { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;