angular
  .module('instaSearch')
  .controller('NewsController', function(news) {
    console.log(news);

    var vm = this;
    vm.news = news;
  	
  });