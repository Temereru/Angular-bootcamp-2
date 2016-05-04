angular.module('movieLibrary').filter('filterByName', function(){
  return function(movies, name){
    var retVal = [];
    if(name === ''){
      return movies;
    }
    if(movies){

      if(name === ''){
        return movies;
      }
      movies.forEach(function(movie){
        if(movie.name.indexOf(name) !== -1){
          retVal.push(movie);
        }
      });
    }
    
    return retVal;
  }
})