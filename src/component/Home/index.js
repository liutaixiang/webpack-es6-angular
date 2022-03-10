import './home.css';

import angular from 'angular';
import angularuirouter from 'angular-ui-router';

import router from './router';
import HomeController from './home';

import randomNames from '../../services/randomNames';
import greeting from '../../directives/greeting';

export default angular.module('app.home', [angularuirouter, randomNames, greeting])
	.config(router)
	.controller('HomeController', HomeController)
	.name;