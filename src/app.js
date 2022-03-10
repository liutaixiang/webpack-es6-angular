import 'bootstrap/dist/css/bootstrap.css';
import './css/layout.css'; //引入自定义样式表

import angular from 'angular';
import angularuirouter from 'angular-ui-router';

import router from './router'; //引入根路由

import home from './component/Home'; //引入自定义组件

angular.module('app', [
	angularuirouter,
	home
]).config(router);