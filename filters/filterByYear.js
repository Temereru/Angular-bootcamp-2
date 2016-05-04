angular.module('movieLibrary').filter('filterByYear', function(){
  return function(movies, year){
    var retVal = [];
    if(movies && year){
      movies.forEach(function(movie){
        if(movie.year === year){
          retVal.push(movie);
        }
      });
    }
    
    return retVal;
  }
})