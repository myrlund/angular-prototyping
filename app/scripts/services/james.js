'use strict';

angular.module('viewProtoApp.james', [])
.factory('James', ['$http', 'TokenHandler', function($http, tokenHandler) {
  var James = {};
  var apiUrl = "https://stagingapi.comoyo.com";

  James.fetchWelcomeLists = function(success, error) {
    var url = apiUrl + "/view/no/content/welcome?depth=2&expand_links=title,href,coverImages";
    $http({
      method: "GET",
      url: url,
      headers: {
        "Authorization": tokenHandler.getAccessToken(),
        "Accept": "application/v1+json"}
    })
    .success(success)
    .error(function(errormsg) {
          tokenHandler.setAccessToken("none");
          error(errormsg);
    });
  };

  James.fetchGenresLists = function(success, error) {
    var url = apiUrl + "/view/no/content/genres?depth=2&expand_links=title,href,coverImages";
    $http({
      method: "GET",
      url: url,
      headers: {
        "Authorization": tokenHandler.getAccessToken(),
        "Accept": "application/v1+json"}
    })
    .success(success)
    .error(function(errormsg) {
          tokenHandler.setAccessToken("none");
          error(errormsg);
    });
  };

  James.fetchSeriesLists = function(success, error) {
    var url = apiUrl + "/view/no/content/series?depth=2&expand_links=title,href,coverImages";
    $http({
      method: "GET",
      url: url,
      headers: {
        "Authorization": tokenHandler.getAccessToken(),
        "Accept": "application/v1+json"}
    })
    .success(success)
    .error(function(errormsg) {
          tokenHandler.setAccessToken("none");
          error(errormsg);
    });
  };


  James.fetchList = function(listId, expandLinks, success, error) {
    var url = apiUrl + "/view/no/content/welcome/" + listId;
    if (expandLinks !== "") {
      url = url + "?expand_links=" + expandLinks;
    }
    $http({
      method: "GET",
      url: url,
      headers: {
        "Authorization": tokenHandler.getAccessToken(),
        "Accept": "application/v1+json"}
    })
    .success(success)
    .error(error);
  };

  James.fetchMovie = function(movieId, success, error) {
    var url = apiUrl + "/view/no/film/" + movieId;
    $http({
      method: "GET",
      url: url,
      headers: {
        "Authorization": tokenHandler.getAccessToken(),
        "Accept": "application/v1+json"}
    })
    .success(success)
    .error(function(errormsg) {
          tokenHandler.setAccessToken("none");
          error(errormsg);
    });
  };

  James.fetchSeries = function(movieId, success, error) {
    var url = apiUrl + "/view/no/series/" + movieId;
    $http({
      method: "GET",
      url: url,
      headers: {
        "Authorization": tokenHandler.getAccessToken(),
        "Accept": "application/v1+json"}
    })
    .success(success)
    .error(function(errormsg) {
          tokenHandler.setAccessToken("none");
          error(errormsg);
    });
  };

  James.fetchTicket = function(ticket, success, error) {
    var url = apiUrl + "/view/no/" + ticket;
    console.log(url);
    $http({
      method: "GET",
      url: url,
      headers: {
        "Authorization": tokenHandler.getAccessToken(),
        "Accept": "application/v1+json"}
    })
    .success(success)
    .error(function(errormsg) {
          tokenHandler.setAccessToken("none");
          error(errormsg);
    });
  };

  return James;
}]);
