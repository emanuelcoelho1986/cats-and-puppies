'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  	'ngRoute',
  	'myApp.controllers',
  	'myApp.version',
	'myApp.services',
	'myApp.modal.preview',
	'ui.bootstrap',
	'ngAnimate',
	'ngResource'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);

// Most of the modal options are the same, So I'm setting a global variable for it
var modalOptions = {
    backdrop: true,
    backdropClick: true,
    dialogFade: false,
    keyboard: true,
    resolve: {} // empty storage
};

// Global max items per page
var maxItemsPerPage = 15;