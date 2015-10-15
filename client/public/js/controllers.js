app.controller('songController', ['$scope', 'songFactory', function($scope, songFactory) {

$scope.songs = [];
$scope.albumYear = {};

$scope.getSongs = function(url) {
  songFactory.getSongs(url)                   // points to services.js
  .then(function(response) {
    $scope.songs = response.data;
  });
};

$scope.getSongs();

// Post a song
$scope.postSong = function() {
  console.log("Post a song");
  var payload = $scope.song;
  songFactory.postSong(payload)                // points to services.js
  .then(function(response) {
    $scope.songs.push(response.data);
    $scope.getSongs ();
  });
};


// Edit a song
$scope.editSong = function(song) {
  $scope.songedit = song;
  // var payload = $scope.songEdit;
  // songFactory.putSong(id, payload)          // points to services.js
  // .then(function(response) {
  //   $scope.songs.push(response.data);
  // });
  //   $scope.getSongs();
};

// Delete a song
$scope.deleteSong = function(id) {
  songFactory.deleteSong(id)                   // points to services.js
  .then(function(response) {
    $scope.getSongs();
  });
};

// Get a single song
// $scope.getSong = function(id) {
//   songFactory.getSong('api/beer/' + id)     // points to services.js
//   .then(function(response) {
//     $scope.songEdit = response.data;
//   });
// };

}]); // close app.songs controller


// shows album songs on the home page
app.controller('homeController', ['$scope', function ($scope){
  $scope.albumName = "";
  $scope.songList = false;
  $scope.albumGrid = true;

  // function to show songs when an album conver is clicked
  $scope.showSongs = function($event){
    $scope.albumName = $event.target.alt;
    $scope.songList = !$scope.songList;
    $scope.albumGrid = false;
  };

  // function to hide songs when the button is clicked
  $scope.hideSongs = function($event) {
    $scope.songList = !$scope.songList;
    $scope.albumGrid = !$scope.albumGrid;
  };

}]);  // close homeController






/*
Notes
- app.controller refers to app.js (var app = angular.module('myApp', []);)
- songFactory is also in the services.js file. Simply a variable name
- $scope.songs is connecting the controller with the index.html and now it's set to an empty object
- $scope.albumName = $event.target.alt is used to filter songs in songs.html <tr ng-repeat='song in songs | filter: albumName'>
- $scope.hideSongs = function($event) is used to hide songs in songs.html ng-click='hideSongs()'

*/
