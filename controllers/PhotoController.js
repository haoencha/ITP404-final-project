angular
  .module('instaSearch')
  .controller('PhotoController',['$scope', 'Instagram' , function ($scope, Instagram){

	$scope.pics = [];

	Instagram.fetchPopular(function(data){

		$scope.pics = data;
	});

}]);