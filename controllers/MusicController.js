angular
  .module('instaSearch')
  .controller('MusicController', function(iTunes, $scope, $sce) {

    var vm = this;
    vm.slider = true;
    vm.search = function() {
      console.log('searching...', vm.musicSearch);
      vm.loading = true;
      vm.searchResults = false;

      iTunes.search(vm.musicSearch).then(function(songs) {
        vm.songs = songs;
        vm.loading = false;
        vm.slider = false;
        vm.searchResults = true;
        vm.musicSearch = '';
      });

    };
    $scope.trustSrc = function(src){
    	return $sce.trustAsResourceUrl(src);
    };

  });