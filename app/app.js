"use strict"
angular.module('movieLibrary',['ui.bootstrap', 'ui.router', 'ngMaterial']);

angular.module('movieLibrary').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

  //
  // Now set up the states
  $stateProvider
    .state('Movies', {
      url: "/",
      templateUrl: "Movies.html"
    });
  $stateProvider
    .state('TV', {
      url: "/TV",
      templateUrl: "TV.html"
    });
});