angular.module('myApp')
.directive('beatlesAlbums', function() {
  return {
    restrict: 'E',
    templateUrl:"/templates/albums.html"
  };
});
