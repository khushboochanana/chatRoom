
const mongoose= require('mongoose')

const Schema = mongoose.Schema;

let ChatFriendSchema = new Schema({
  userId: String,
  friendId: String,
  senderName: String,
  message:Object,
  timestampCreated: {type: Number, default: Date.now},
  timestampUpdated: {type: Number, default: Date.now}
});
let ChatFriends = mongoose.model('ChatFriend', ChatFriendSchema)

module.exports= ChatFriends;
