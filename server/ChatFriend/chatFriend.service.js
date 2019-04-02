const ChatModel=require( './chatFriend.model.js')


exports.saveChat =  async (payload)=> {
  var chatFriend = new ChatModel(payload);
  let data = await chatFriend.save()
  return data
}

exports.getUsersChat=async (payload)=> {
  try{
    let data= await ChatModel.find()
    return data
  }catch(err){
    return {error:err}
  }
}
