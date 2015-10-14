app.factory("songFactory", ['$http', function($http){
  var object = {};

  // get all request
  object.getSongs = function() {
    return $http.get('api/songs');
  };

  // get one request
  object.getSong = function() {
    return $http.get('api/song');
  };

  //post request
  object.postSong = function(payload){
    console.log("http", payload);
    return $http.post('api/songs', payload);
  };

  // delete request
  object.deleteSong = function(id){
    return $http.delete('api/song/'+id);
  };

  // put request
  object.putSong = function(id, payload){
    return $http.put('api/song/'+id, payload);
  };

  return object;
}]);
