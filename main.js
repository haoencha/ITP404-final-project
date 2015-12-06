angular
  .module('instaSearch', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/index.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/maps', {
        templateUrl: '/templates/maps.html',
        controller: 'MapsController',
        controllerAs: 'vm',
        resolve: {
        
        }
      })
      .when('/news', {
        templateUrl: '/templates/news.html',
        controller: 'NewsController',
        controllerAs: 'vm',
        resolve: {
          news: function($http, $location) {
            var url = "http://api.nytimes.com/svc/news/v3/content/nyt/all/%7Btime-period%7Djson?api-key=718e9c614a4e157613c18ea201dca81c%3A0%3A64325990";
            return $http.get(url).then(function(response) {
              return response.data.results;
            }, function() {
              // redirect to /artists
              $location.path('/');
            });
          }
        }
      })
      .when('/music',{
      	templateUrl: 'templates/music.html',
      	controller: 'MusicController',
      	controllerAs: 'vm',
        
      })
      .when('/photo',{
      	templateUrl:'templates/photo.html',
      	controller: 'PhotoController',
      	controllerAs: 'vm',
      	resolve:{
      		
      	}
      })
      .otherwise({
        redirectTo: '/'
      });
  });
