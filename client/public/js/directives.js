// **************************************** //
//                                          //
// These are all injected in at index.html  //
// <beatles-years><beatles-albums>          //
// <beatles-years><beatles-songs>           //
// <beatles-years><beatles-years>           //
// **************************************** //


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

app.directive('index.html', function() {
  return {
    restrict: 'E',
    templateUrl:"../views/index.html"
  };
});

