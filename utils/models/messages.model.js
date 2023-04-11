const { Schema, model } = require("mongoose");
const Message = new Schema({
  message_id: Schema.ObjectId,
  channel: {type:Schema.ObjectId, required: true},
  content: {type:String, required: true},
  author: {type:Schema.ObjectId, required: true},
  createdAt: {type:Date, required: true},
  createdAtTimestamp: {type:Number, required: true},
  editedAt: {type:Date, default: null},
  editedAtTimestamp: {type:Number, default: null}
});

module.exports = model("messages", Message);
