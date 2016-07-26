// Giphy endpoint
// Beta key to use: dc6zaTOxFJmzC
angular.module('myApp.services', []).factory('Giphy', function($resource) {
  return $resource('http://api.giphy.com/v1/gifs/search?q=:searchType&limit=:limit&offset=:offset&api_key=dc6zaTOxFJmzC'); // Note the full endpoint address
});