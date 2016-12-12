'use strict';

/**
 * @ngdoc overview
 * @name twentyApp
 * @description
 * # twentyApp
 *
 * Main module of the application.
 */
angular
  .module('twentyApp', [
    'Game',
    // 'ngAnimate',
    // 'ngCookies',
    // 'ngResource',
    // 'ngRoute',
    // 'ngSanitize',
    // 'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('GameController', function(GameManager) {
    this.game = GameManager;
  });
