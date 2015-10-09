angular.module('myApp')
.controller('songController', ['$scope', 'songFactory', function($scope, songFactory) {

// app.controller refers to app.js (var app = angular.module('myApp', []);)
// songFactory is also in the services.js file. It's simply a variable name
// $scope.songs is connecting the controller with the index.html(view) and now it's set to an empty object

$scope.songs = {};
$scope.albumYear = {};

$scope.getSongs = function(url) {
  songFactory.getSongs(url)
  .then(function(response) {
    $scope.songs = response.data;
  });
};

$scope.getSongs();

// Post a song
$scope.postSong = function() {
  console.log("Post a song");
  var payload = $scope.song;
  songFactory.postSong(payload)
  .then(function(response) {
    $scope.songs.push(response.data);
    $scope.getSongs ();
  });
};


// Edit a song
$scope.editSong = function(song) {
  $scope.songedit = song;
  // var payload = $scope.songEdit;
  // songFactory.putSong(id, payload)
  // .then(function(response) {
  //   $scope.songs.push(response.data);
  // });
  //   $scope.getSongs();
};

// Delete a song
$scope.deleteSong = function(id) {
  songFactory.deleteSong(id)
  .then(function(response) {
    $scope.getSongs();
  });
};

// Get a single song
// $scope.getSong = function(id) {
//   songFactory.getSong('api/beer/' + id)
//   .then(function(response) {
//     $scope.songEdit = response.data;
//   });
// };



}]);             // close app.controller
