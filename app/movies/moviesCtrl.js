"use strict"
angular.module('movieLibrary').controller('HelloCtrl', ['$scope', 'moviesServ', function($scope, moviesServ) {
  

  $scope.movies = moviesServ.getMovies();
  $scope.editMode = false;
  $scope.filter = {
    year: 2014
  }

  $scope.triggerDelMode = function (editMode) {
    $scope.editMode = editMode;
  }

  $scope.delMovie = function (idx) {
    $scope.movies.splice(idx, 1);
  }
 }]);
