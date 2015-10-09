angular.module('myApp')
.directive('beatlesYears', function() {
  return {
    restrict: 'E',
    templateUrl:"/templates/band_solo_bootleg.html"
  };
});
