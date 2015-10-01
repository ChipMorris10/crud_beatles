app.controller('songController', function($scope, $timeout, HTTPFactory) {
// app.controller refers to app.js (var app = angular.module('myApp', []);)
// HTTPFactory is also in the services.js file. A variable name Johnny created
// $scope.songs is connecting the controller with the html(view) and now it's set to an empty object
  $scope.success = false;
  $scope.message = '';
  $scope.songs = {};
  $scope.edit = false;
  getSongs = function(url) {
    HTTPFactory.getSongs(url)
    .then(function(response) {
      $scope.songs = response.data;
      console.log(response.data);
    });
  };

 getSongs('api/songs');

 function messageTimeout() {
  $scope.success = false;
 }














});             // close app.controller
