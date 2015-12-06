angular
  .module('instaSearch')
  .factory('Instagram', ['$http', function($http){

  return {
    fetchPopular: function(callback){
            
            var endPoint = "https://api.instagram.com/v1/media/popular?client_id=22e3b805c403482f9044bf05936b4e66&callback=JSON_CALLBACK";
            
            $http.jsonp(endPoint).success(function(response){
                callback(response.data);
            });
      }
  };

}]);