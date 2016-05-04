"use strict"
angular.module('movieLibrary').controller('HelloCtrl', ['$scope', 'moviesServ', '$mdDialog', function($scope, moviesServ, $mdDialog) {
  
  $scope.movies = [];
  $scope.getMovies = function(){
    $scope.loading = true;
    moviesServ.getMoviesWithTimeout().then(function(result){
      $scope.movies = result;
      $scope.loading = false;
    });
  }
  $scope.editMode = false;
  $scope.filter = {
    year: 2014,
    name: ''
  };
  $scope.loading = false;

  $scope.triggerDelMode = function (editMode) {
    $scope.editMode = editMode;
  }

  $scope.delMovie = function (idx, movie) {
    var confirm = $mdDialog.confirm()
          .title('Are you sure you want to delete ' + movie.name + '?')
          .textContent('Deleted movies are gone permanently and cannot be returned.')
          .ok('Yes, Delete it')
          .cancel('No, Keep it');
    $mdDialog.show(confirm).then(function() {
      $scope.movies.splice(idx, 1);
    }, function() {});
    
  };

  $scope.refresh = function() {
    $scope.movies = [];
    $scope.getMovies();
  }

  $scope.getMovies();
 }]);
