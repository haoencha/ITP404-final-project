  angular
  .module('instaSearch')
  .controller('MapsController', function(Maps) {
    var center = new google.maps.LatLng(30.141198, -38.787720);
    var map = new google.maps.Map(document.getElementById('map-canvas'),{
      center: center,
      zoom: 2
    });

    var vm = this;
    var target, marker, infowindow;

    vm.searchCity = true;
    vm.searchPhoto = true;
    vm.searchboxCity = false;
    vm.searchboxPhoto= false;

    vm.locationPhotos = [];
    vm.markers = [];
    vm.infowindows = [];
    vm.targets = [];

    vm.search = function() {
      console.log('searching...', vm.locationSearch);
      vm.loading = true;
        // vm.previousSearches.push(vm.artistSearch);

        Maps.search(vm.locationSearch).then(function(locations) {
          vm.locations = locations;
          console.log(locations);
          var lat = locations[0].geometry.location.lat;
          var lng = locations[0].geometry.location.lng;
          vm.loading = false;

          if(vm.searchboxCity){
            center = new google.maps.LatLng(lat, lng);
            map = new google.maps.Map(document.getElementById('map-canvas'),{
              center: center,
              zoom: 5
            });
            marker = new google.maps.Marker({
              map: map,
              position: center,
              animation: google.maps.Animation.DROP
            });
            infowindow = new google.maps.InfoWindow({
              content: "<ul><strong>"+locations[0].formatted_address+"</strong></ul><li>Latitude: "+lat+"</li><li>Longitude: "+lng+"</li>",
              position: center
            });
            google.maps.event.addListener(marker, 'click', function(e){

              infowindow.open(map);
            });
          }
          if(vm.searchboxPhoto){

            center = new google.maps.LatLng(lat, lng);
            map = new google.maps.Map(document.getElementById('map-canvas'),{
              center: center,
              zoom: 15 });

            Maps.searchPhotos(lat, lng).then(function(locations){
              console.log(locations.data.data[0]);
              vm.locationPhotos = locations;

              for(i = 0; i <locations.data.data.length; i++){
                target = new google.maps.LatLng(locations.data.data[i].location.latitude, locations.data.data[i].location.longitude);
                vm.targets.push(target);
                vm.markers[i] = new google.maps.Marker({
                  map: map,
                  position: target,
                  animation: google.maps.Animation.DROP
                });
                vm.infowindows[i] = new google.maps.InfoWindow({
                  content: "<a href='"+locations.data.data[i].link+"' target='_blank'><img src='"+
                  locations.data.data[i].images.low_resolution.url+"' height='300px'></a><br><br><p style='font-size:15px; text-align:center'><strong style='font-size:20px'>"+
                  locations.data.data[i].location.name+"</strong><br><br>Posted by: <a href='https://www.instagram.com/"+locations.data.data[i].user.username+"/' target='_blank'>"+
                  locations.data.data[i].user.username+"</a></p>",
                  position: target
                });

                google.maps.event.addListener(vm.markers[i], 'click', (function(marker, i){
                  return function(){                      
                    vm.infowindows[i].open(map, vm.markers[i]);
                  }
                })(vm.markers[i], i));
              }
                   // vm.loopPhotos(locations.data.data.length, vm.markers, vm.targets, vm.infowindows);

                 });

}
vm.locationSearch = '';
});
};
      // vm.loopPhotos = function(arrayLength, markers, targets, infowindows){
      //   console.log(markers);
      //   console.log(targets);
      //   console.log(infowindows);

      //   for(i=0; i < arrayLength; i++){
      //               google.maps.event.addListener(markers[i], 'click', function(e){

      //                 var maps = new google.maps.Map(document.getElementById('map-canvas'),{
      //                 center: targets[i],
      //                 zoom: 15 });

      //                 infowindows[i].open(maps);
      //               });
      //   }

      // };

    });