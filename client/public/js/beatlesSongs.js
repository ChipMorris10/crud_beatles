angular.module('myApp')
.directive('beatlesSongs', function() {
  return {
    restrict: 'E',
    templateUrl:"/templates/songs.html"
  };
});
