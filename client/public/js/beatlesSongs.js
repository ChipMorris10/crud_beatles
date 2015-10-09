angular.module('myApp')
.directive('beatlesSongs', function() {
  return {
    restrict: 'E',
    templateUrl:"/templates/albums.html"
  };
});
