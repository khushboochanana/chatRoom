let express = require('express')
let app = express();
console.log ("hii ")
let http = require('http');
let server = http.Server(app);
const mongoose= require ("mongoose")
let socketIO = require('socket.io');
let io = socketIO(server);
const router = express.Router()
const MONGO_URL = "mongodb://127.0.0.1:27017/ChatRoom"
const cors = require('cors');

const ChatService=require("./ChatFriend/chatFriend.service.js")
app.use(cors());
app.use( (req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
mongoose.Promise = global.Promise
mongoose.connect(MONGO_URL, { useMongoClient: true })
  .then(() => console.log(`Database connected at ${MONGO_URL}`))
.catch(err => console.log(`Database connection error: ${err.message}`))

app.use('/chat', require('./ChatFriend/index.js'))


const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('new-message', (message) => {
    console.log(message);
  ChatService.saveChat(message)
    io.emit(message);
  });

});

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});
