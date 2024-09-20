const mongoose = require('mongoose');

const GameUserSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
 
  points: { type: Number, default: 5000 },
  referer : { type: String, required: true },
   createAt : {type : Date, default : Date.now()}
});

const GameUser = mongoose.model('GameUser', GameUserSchema);

module.exports = GameUser;