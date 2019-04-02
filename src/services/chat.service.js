import  io from 'socket.io-client';
console.log(io)
const url = 'http://localhost:3000';


const socket = io(url);
function sendMessage (payload) {

  console.log(payload,"MMMMMM")

  socket.emit('new-message', payload);
}


export const ChatService = function (){
  return {
    socket,
    sendMessage
  }
}
