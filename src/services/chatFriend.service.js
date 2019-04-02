 export const ChatFriendApi = function ($resource) {
   return $resource('http://localhost:3000/chat', null, {
     getChat: {method: 'get',cache : false}
   });
 }
