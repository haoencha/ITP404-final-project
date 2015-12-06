describe("music service", function() {
  var tracks, $httpBackend;

  beforeEach(module('instaSearch'));
  beforeEach(inject(function($injector) {
    tracks = $injector.get('iTunes');
    $httpBackend = $injector.get('$httpBackend');
    
    $httpBackend
      .expectJSONP('https://itunes.apple.com/search?term=eminem&callback=JSON_CALLBACK')
      .respond({
		results: [
{
wrapperType: "track",
kind: "song",
artistId: 111051,
collectionId: 1018049,
trackId: 1018037,
artistName: "Eminem",
collectionName: "8 Mile (Music from and Inspired By the Motion Picture)",
trackName: "Lose Yourself",
collectionCensoredName: "8 Mile (Music from and Inspired By the Motion Picture)",
trackCensoredName: "Lose Yourself",
collectionArtistId: 4940310,
collectionArtistName: "Various Artists",
artistViewUrl: "https://itunes.apple.com/us/artist/eminem/id111051?uo=4",
collectionViewUrl: "https://itunes.apple.com/us/album/lose-yourself/id1018049?i=1018037&uo=4",
trackViewUrl: "https://itunes.apple.com/us/album/lose-yourself/id1018049?i=1018037&uo=4",
previewUrl: "http://a281.phobos.apple.com/us/r1000/119/Music/v4/f1/7b/d6/f17bd6e3-55c0-b7e0-9863-bc522900e950/mzaf_5153970109972844579.aac.m4a",
artworkUrl30: "http://is3.mzstatic.com/image/thumb/Music/v4/54/4b/00/544b0075-6ef9-5fb6-8040-0bcd9f0d5766/source/30x30bb.jpg",
artworkUrl60: "http://is3.mzstatic.com/image/thumb/Music/v4/54/4b/00/544b0075-6ef9-5fb6-8040-0bcd9f0d5766/source/60x60bb.jpg",
artworkUrl100: "http://is3.mzstatic.com/image/thumb/Music/v4/54/4b/00/544b0075-6ef9-5fb6-8040-0bcd9f0d5766/source/100x100bb.jpg",
collectionPrice: 9.99,
trackPrice: 1.29,
releaseDate: "2002-10-21T07:00:00Z",
collectionExplicitness: "explicit",
trackExplicitness: "explicit",
discCount: 1,
discNumber: 1,
trackCount: 16,
trackNumber: 1,
trackTimeMillis: 320293,
country: "USA",
currency: "USD",
primaryGenreName: "Soundtrack",
contentAdvisoryRating: "Explicit",
radioStationUrl: "https://itunes.apple.com/station/idra.1018037",
isStreamable: true
},
{
wrapperType: "track",
kind: "song",
artistId: 111051,
collectionId: 378423506,
trackId: 378423583,
artistName: "Eminem",
collectionName: "Recovery (Deluxe Edition)",
trackName: "Not Afraid",
collectionCensoredName: "Recovery (Deluxe Edition)",
trackCensoredName: "Not Afraid",
artistViewUrl: "https://itunes.apple.com/us/artist/eminem/id111051?uo=4",
collectionViewUrl: "https://itunes.apple.com/us/album/not-afraid/id378423506?i=378423583&uo=4",
trackViewUrl: "https://itunes.apple.com/us/album/not-afraid/id378423506?i=378423583&uo=4",
previewUrl: "http://a884.phobos.apple.com/us/r1000/070/Music/d9/f9/ba/mzm.ohfuogtw.aac.p.m4a",
artworkUrl30: "http://is5.mzstatic.com/image/thumb/Music/v4/e1/48/37/e148379b-30a2-6d4f-a7a9-da5ae15b2b0a/source/30x30bb.jpg",
artworkUrl60: "http://is5.mzstatic.com/image/thumb/Music/v4/e1/48/37/e148379b-30a2-6d4f-a7a9-da5ae15b2b0a/source/60x60bb.jpg",
artworkUrl100: "http://is5.mzstatic.com/image/thumb/Music/v4/e1/48/37/e148379b-30a2-6d4f-a7a9-da5ae15b2b0a/source/100x100bb.jpg",
collectionPrice: 14.99,
trackPrice: 1.29,
releaseDate: "2010-06-21T07:00:00Z",
collectionExplicitness: "explicit",
trackExplicitness: "explicit",
discCount: 1,
discNumber: 1,
trackCount: 19,
trackNumber: 7,
trackTimeMillis: 248092,
country: "USA",
currency: "USD",
primaryGenreName: "Hip-Hop/Rap",
contentAdvisoryRating: "Explicit",
radioStationUrl: "https://itunes.apple.com/station/idra.378423583",
isStreamable: true
},
{
wrapperType: "track",
kind: "song",
artistId: 111051,
collectionId: 378423506,
trackId: 378423786,
artistName: "Eminem",
collectionName: "Recovery (Deluxe Edition)",
trackName: "Love the Way You Lie (feat. Rihanna)",
collectionCensoredName: "Recovery (Deluxe Edition)",
trackCensoredName: "Love the Way You Lie (feat. Rihanna)",
artistViewUrl: "https://itunes.apple.com/us/artist/eminem/id111051?uo=4",
collectionViewUrl: "https://itunes.apple.com/us/album/love-way-you-lie-feat.-rihanna/id378423506?i=378423786&uo=4",
trackViewUrl: "https://itunes.apple.com/us/album/love-way-you-lie-feat.-rihanna/id378423506?i=378423786&uo=4",
previewUrl: "http://a1853.phobos.apple.com/us/r1000/065/Music/91/04/87/mzm.rpuzqtfx.aac.p.m4a",
artworkUrl30: "http://is5.mzstatic.com/image/thumb/Music/v4/e1/48/37/e148379b-30a2-6d4f-a7a9-da5ae15b2b0a/source/30x30bb.jpg",
artworkUrl60: "http://is5.mzstatic.com/image/thumb/Music/v4/e1/48/37/e148379b-30a2-6d4f-a7a9-da5ae15b2b0a/source/60x60bb.jpg",
artworkUrl100: "http://is5.mzstatic.com/image/thumb/Music/v4/e1/48/37/e148379b-30a2-6d4f-a7a9-da5ae15b2b0a/source/100x100bb.jpg",
collectionPrice: 14.99,
trackPrice: 1.29,
releaseDate: "2010-06-21T07:00:00Z",
collectionExplicitness: "explicit",
trackExplicitness: "explicit",
discCount: 1,
discNumber: 1,
trackCount: 19,
trackNumber: 15,
trackTimeMillis: 263340,
country: "USA",
currency: "USD",
primaryGenreName: "Hip-Hop/Rap",
contentAdvisoryRating: "Explicit",
radioStationUrl: "https://itunes.apple.com/station/idra.378423786",
isStreamable: true
},
{
wrapperType: "track",
kind: "song",
artistId: 111051,
collectionId: 731756766,
trackId: 731756778,
artistName: "Eminem",
collectionName: "The Marshall Mathers LP2 (Deluxe)",
trackName: "The Monster (feat. Rihanna)",
collectionCensoredName: "The Marshall Mathers LP2 (Deluxe)",
trackCensoredName: "The Monster (feat. Rihanna)",
artistViewUrl: "https://itunes.apple.com/us/artist/eminem/id111051?uo=4",
collectionViewUrl: "https://itunes.apple.com/us/album/the-monster-feat.-rihanna/id731756766?i=731756778&uo=4",
trackViewUrl: "https://itunes.apple.com/us/album/the-monster-feat.-rihanna/id731756766?i=731756778&uo=4",
previewUrl: "http://a1821.phobos.apple.com/us/r1000/010/Music4/v4/a7/21/a0/a721a055-5b40-0578-5a20-5443ae65d033/mzaf_3726498042649242002.plus.aac.p.m4a",
artworkUrl30: "http://is4.mzstatic.com/image/thumb/Music4/v4/bf/1e/0b/bf1e0b91-ed8b-afb5-8155-613c330bea1f/source/30x30bb.jpg",
artworkUrl60: "http://is4.mzstatic.com/image/thumb/Music4/v4/bf/1e/0b/bf1e0b91-ed8b-afb5-8155-613c330bea1f/source/60x60bb.jpg",
artworkUrl100: "http://is4.mzstatic.com/image/thumb/Music4/v4/bf/1e/0b/bf1e0b91-ed8b-afb5-8155-613c330bea1f/source/100x100bb.jpg",
collectionPrice: 15.99,
trackPrice: 1.29,
releaseDate: "2013-11-05T08:00:00Z",
collectionExplicitness: "explicit",
trackExplicitness: "explicit",
discCount: 1,
discNumber: 1,
trackCount: 21,
trackNumber: 12,
trackTimeMillis: 250189,
country: "USA",
currency: "USD",
primaryGenreName: "Hip-Hop/Rap",
contentAdvisoryRating: "Explicit",
radioStationUrl: "https://itunes.apple.com/station/idra.731756778",
isStreamable: true
},]
      });
    }));
  it("search(eminem) should resolve with an array of eminem tracks", function() {
    tracks.search('eminem').then(function(songs) {
      expect(songs.length).toEqual(4);
    });

    $httpBackend.flush();
  });
	it("search(eminem) should return an array with the first index having the trackName 'Lose Yourself'", function() {
    tracks.search('eminem').then(function(songs) {
      expect(songs[0].trackName).toEqual("Lose Yourself");
    });

    $httpBackend.flush();
  });
  
});