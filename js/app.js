var app = angular.module("httpExample", []);

app.controller("moviesCtrl", ["$scope", "$http", function($scope, $http){
  $scope.title = "It's Movie Time!"
  $scope.searchTerm = "";
  $scope.movies = [];
  $scope.error = "";
  $scope.searchOnType = false;

  $scope.checkSearchOnType = function(){
    $scope.searchOnType = !$scope.searchOnType;
  }

  $scope.$watch('searchTerm', function(newVal, oldVal) {
    if($scope.searchOnType){
      $scope.search(newVal);
    }
  });

  $scope.search = function(){
    if(!$scope.searchTerm){
      $scope.error = "Cannot search for an empty string!";
      return;
    }
    else if(/^[a-z\d\-_\s]+$/i.test($scope.searchTerm) == false){
      $scope.error = "Illegal characters detected.";
      return;
    }

    var req = {
      url: 'http://www.omdbapi.com',
      method: 'GET',
      params: {
        s: $scope.searchTerm,
      }
    }

    $http(req).then(function success(res) {
      //Remove the error message.
      $scope.error = "";

      //do something with the response if successful
      if(res.status === 200){
        $scope.movies = res.data.Search;
      }
    }, function error(res) {
      //do something if the response has an error
      console.log(res);
      $scope.error = "The request to omdbapi failed! See console for error.";
    });
  }
}]);
