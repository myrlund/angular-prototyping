'use strict';

angular.module('viewProtoApp.service', ['LocalStorageModule'])
.factory('TokenHandler', ['$http', 'localStorageService' , function($http, localStorageService) {
  var TokenHandler = {};
  var token = localStorageService.get('accessToken') || "none";

  TokenHandler.setAccessToken = function(newToken) {
    localStorageService.add('accessToken', newToken);
    token = newToken;
  };

  TokenHandler.getAccessToken = function() {
    return token;
  };

  TokenHandler.login = function(username, password, success, error) {
    var payload = {
      grant_type: 'password',
      username: username,
      password: password
    };
    $http({
      method: 'POST',
      url: 'https://stagingapi.comoyo.com/oauth/token',
      data: 'grant_type=password&username=' + username + '&password=' + password,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic censored'
      }
    }).success(function (response) {
      TokenHandler.setAccessToken(response.access_token);
      success(response);
    }).error(error);

  };

  return TokenHandler;
}]);
