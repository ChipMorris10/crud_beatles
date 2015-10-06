// I removed $timeout from the function. I need to put it back if I want to use it.
app.controller('songController', function($scope, songFactory) {
// DO I NEED $http? I'm not certain what that does

// app.controller refers to app.js (var app = angular.module('myApp', []);)
// songFactory is also in the services.js file. It's simply a variable name
// $scope.songs is connecting the controller with the index.html(view) and now it's set to an empty object
  // $scope.success = false;
  // $scope.message = '';
   $scope.song = {};
  // $scope.edit = false;
  getSongs = function(url) {
    songFactory.getSongs(url)
    .then(function(response) {
      $scope.songs = response.data;
    });
  };

 getSongs('api/songs');
 console.log("Get songs");

 // function messageTimeout() {
  // $scope.success = false;
 // }


// Post a song
$scope.postSong = function() {
console.log("Post a song");
var payload = $scope.song;
songFactory.postSong(payload)
.then(function(response) {
  $scope.songs.push(response.data);
  // $scope.song = {};
  // $scope.success = true;
  // $scope.message = "I added a new song!";
  // timeout(messageTimeout, 5000);
  // getSongs('api/songs');
  console.log("response data", response.data);
});
};

// Edit a song
$scope.editSong = function(id) {
  var payload = $scope.songEdit;
  songFactory.putSong(id, payload)
  .then(function(response) {
    $scope.songs.push(response.data);
  });
  getSongs('api/songs');
};

// Delete a song
$scope.deleteSong = function(id) {
  songFactory.deleteSong(id)
  .then(function(response) {
    getSongs('api/songs');
  });
};

// Get a single song
// $scope.getSong = function(id) {
//   songFactory.getSong('api/beer/' + id)
//   .then(function(response) {
//     $scope.songEdit = response.data;
//   });
// };



});             // close app.controller
