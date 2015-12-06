describe("maps service", function() {
  var maps, $httpBackend;

  beforeEach(module('instaSearch'));
  beforeEach(inject(function($injector) {
    maps = $injector.get('Maps');
    $httpBackend = $injector.get('$httpBackend');
    
    $httpBackend
      .whenGET('https://maps.googleapis.com/maps/api/geocode/json?address=taipei')
      .respond(200, {
		results: [{
			address_components: [{
				long_name: "Taipei",
				short_name: "Taipei",
				types: [
					"colloquial_area",
					"locality",
					"political"
				]},{
				long_name: "Taiwan",
				short_name: "TW",
				types: [
					"country",
					"political"
				]}],
				formatted_address: "Taipei, Taiwan",
				geometry: {
					bounds: {
						northeast: {
							lat: 25.2443731,
							lng: 121.7300824
						},
						southwest: {
							lat: 24.7900797,
							lng: 121.2826735
						}
					},
					location: {
						lat: 25.0329694,
						lng: 121.5654177
					},
					location_type: "APPROXIMATE",
					viewport: {
						northeast: {
							lat: 25.2443731,
							lng: 121.7300824
						},
						southwest: {
							lat: 24.7900797,
							lng: 121.2826735
						}
					}
				},
				place_id: "ChIJmQrivHKsQjQR4MIK3c41aj8",
				types: [
					"colloquial_area",
					"locality",
					"political"
				]
			}
		],      
      });
      
      
    }));
  it("search(Taipei) should resolve with latitude and longitude of Taipei", function() {
    maps.search('taipei').then(function(locations) {
      expect(locations).toEqual([{
			address_components: [{
				long_name: "Taipei",
				short_name: "Taipei",
				types: [
					"colloquial_area",
					"locality",
					"political"
				]},{
				long_name: "Taiwan",
				short_name: "TW",
				types: [
					"country",
					"political"
				]}],
				formatted_address: "Taipei, Taiwan",
				geometry: {
					bounds: {
						northeast: {
							lat: 25.2443731,
							lng: 121.7300824
						},
						southwest: {
							lat: 24.7900797,
							lng: 121.2826735
						}
					},
					location: {
						lat: 25.0329694,
						lng: 121.5654177
					},
					location_type: "APPROXIMATE",
					viewport: {
						northeast: {
							lat: 25.2443731,
							lng: 121.7300824
						},
						southwest: {
							lat: 24.7900797,
							lng: 121.2826735
						}
					}
				},
				place_id: "ChIJmQrivHKsQjQR4MIK3c41aj8",
				types: [
					"colloquial_area",
					"locality",
					"political"
				]
			}
		]);
    });

    $httpBackend.flush();
  });
	it("search(Taipei) should return an array of one index", function() {
    maps.search('taipei').then(function(locations) {
      expect(locations.length).toEqual(1);
    });

    $httpBackend.flush();
  });
  it("search(Taipei) should return a formatted address", function() {
    maps.search('taipei').then(function(locations) {
      expect(locations[0].formatted_address).toEqual("Taipei, Taiwan");
    });

    $httpBackend.flush();
  });
  it("search(Taipei) should return a latitude", function() {
    maps.search('taipei').then(function(locations) {
      expect(locations[0].geometry.location.lat).toEqual(25.0329694);
    });

    $httpBackend.flush();
  });
    it("search(Taipei) should return a longitude", function() {
    maps.search('taipei').then(function(locations) {
      expect(locations[0].geometry.location.lng).toEqual(121.5654177);
    });

    $httpBackend.flush();
  });
  
});