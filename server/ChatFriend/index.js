const express =require('express')
const ChatController= require('./chatFriend.controller')

const router = express.Router()

router.get('/',ChatController.getChat)


module.exports= router
