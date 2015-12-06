angular
  .module('instaSearch', ["ngRoute"])
  .factory('Maps', function($http) {
    return {
      search: function(location) {
        var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+location;

        return $http.get(url).then(function(response) {
           return response.data.results;
        });
      },
      searchPhotos: function(lat, lng){
        var url = "https://api.instagram.com/v1/media/search?lat="+lat+"&lng="+lng+"&client_id=22e3b805c403482f9044bf05936b4e66&callback=JSON_CALLBACK";
        
        return $http.jsonp(url).success(function(response){
            callback(response.data);
        });
      }


    };
  });