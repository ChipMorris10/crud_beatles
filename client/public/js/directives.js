app.directive('beatlesAlbums', function() {
  return {
    restrict: 'E',
    templateUrl:"/html_templates/albums.html"
  };
});


app.directive('beatlesSongs', function() {
  return {
    restrict: 'E',
    templateUrl:"/html_templates/songs.html"
  };
});


app.directive('beatlesYears', function() {
  return {
    restrict: 'E',
    templateUrl:"/html_templates/band_solo_bootleg.html"
  };
});


app.directive('beatlesHeader', function() {
  return {
    restrict: 'E',
    templateUrl:'/html_templates/header.html'
  };
});
