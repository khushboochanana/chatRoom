
const  ChatService =require ('./chatFriend.service.js')


exports.getChat=async (req,res) =>{
  try{
    let data =await ChatService.getUsersChat(req.params)
    if(data){
      res.json({ status: true,data:data });
    }else{
      res.json({ status: false});
    }
  }catch(err){
    res.json({ status: false });

  }
}

