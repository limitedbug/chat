const { Schema, model } = require("mongoose");
const Channel = new Schema({
  channel_id: Schema.ObjectId,
  type: {type: Number, required: true},
  icon: {type:String, default: null},
  name: {type:String, default: null},
  recipient: {type: Schema.ObjectId, default: null,ref: 'Users'},
  recipients: [{type: Schema.ObjectId,ref: 'Users'}],
  createdAt: {type: Date, required:true},
  createdAtTimestamp: {type: Number,required:true},
  owner: {type: Schema.ObjectId,ref: 'Users', required:true}
});

module.exports = model("channels", Channel);
