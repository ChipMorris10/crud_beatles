angular.module('myApp')
.directive('beatlesHeader', function() {
  return {
    restrict: 'E',
    templateUrl:'/templates/nav_bar.html'
  };
});
