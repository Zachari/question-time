var app = angular.module("QuestionApp", []);

app.controller("CluesCtrl", function($scope, $http) {
  var url = 'https://trivia-zachari.c9.io/api/random.json';
  $http.get(url).
    success(function(data, status, headers, config) {
      console.log(data);
      $scope.clues = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});

