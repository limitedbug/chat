const { Schema, model } = require("mongoose");

const User = new Schema({
  user_id:Schema.ObjectId,
  avatar: {type: String, default: null},
  username: {type: String, required: true},
  createdAt: {type:Date, required:true},
  createdAtTimestamp: {type:Number, required:true}
});

module.exports = model("users", User);
