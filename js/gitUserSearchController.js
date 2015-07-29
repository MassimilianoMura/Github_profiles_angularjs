githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var searchResource = $resource('https://api.github.com/search/users');

  var self = this;

  self.doSearch = function() {

    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );


  };


}]);

// var access_token = 'b072746a3665ad481b34c674777574569748696d'
//    var url = 'https://api.github.com/users/' + $('input.username').val() + "?access_token=" + access_token;
