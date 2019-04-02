export const AppCtrl = function ($scope,ChatService,ChatFriendApi) {
  let self = this
  self.message=""
  self.messages=[{}]
  self.sendMessage=function(){
    console.log("SEND MESSAGE:: ")
    ChatService.sendMessage({message:self.message,senderName:"User1"})
  }

  self.init=function(){
    ChatFriendApi.getChat(function(data){
      self.messages=data.data
      console.log(self.messages)
    },function(err){

    })
  }
  self.init()
}
