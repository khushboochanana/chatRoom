import angular from 'angular';

import '../style/app.css';
import ngResource from 'angular-resource'
import {AppCtrl} from './app.controller.js'
import {ChatService} from '../services/chat.service.js'
import {ChatFriendApi} from '../services/chatFriend.service.js'
let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngResource'])
  .config(function(){

  })
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .factory('ChatService', ChatService)
  .factory('ChatFriendApi', ChatFriendApi);

export default MODULE_NAME;
