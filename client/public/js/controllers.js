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
      console.log("Console log from Line 14");
    });
  };

 getSongs('api/songs');

 function messageTimeout() {
  $scope.success = false;
 }

 $scope.postSong = function() {
  var payload = $scope.song;
  HTTPFactory.post('/api/songs', payload)
  .then(function(response) {
    $scope.songs.push(response.data);
    $scope.song = {};
    $scope.success = true;
    $scope.message = "I added a new song!";
    timeout(messageTimeout, 5000);
    getSongs('api/songs');
    console.log(response.data);
  });
 };
















});             // close app.controller
