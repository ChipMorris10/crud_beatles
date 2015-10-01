app.factory('HTTPFactory', ['$http', function($http){
  var object = {};
  object.getSongs = function() {
    return $http.get('api/songs');
  };
   object.getSong = function() {
    return $http.get('api/song');
  };
  //post request
  object.postSong = function(payload){
    return $http.post('api/songs', payload);
  };

  object.deleteSong = function(id){
    return $http.delete('api/song/'+id);
  };

  object.putSong = function(id){
    return $http.put('api/song/'+id);
  };

  return object;
}]);
