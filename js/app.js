var API_BASE_URL = "http://www.omdbapi.com";
var app = angular.module("httpExample", []);

app.controller("moviesCtrl", ["$scope", "$http", function($scope, $http){
  $scope.title = "It's Movie Time!"
  $scope.searchTerm = "";
  $scope.movies = [];
  $scope.error = "";

  $scope.search = function(){
    //1. Decide if there are any invalid states, nip them in the bud
    //(Hint: checkout the helper function)

    //2. Set up the request to OMDb

    //3. What to do on success?

    //4. What to do on error?
  }

  //Challenge: (after you're done with search())
  //How could we add functionality so that we could search as
  //the user types instead of having a submit button?
}]);

//Return true if input is only alphanumeric + space + underscores
function isAlphaNumeric(input){
  return /^[a-z\d\-_\s]+$/i.test(input);
}
