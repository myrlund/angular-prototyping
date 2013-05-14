'use strict';

angular.module('PrototypingApp')
  .controller('MainCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {

    var url = 'https://comoyo-test.firebaseio.com/items';
    var promise = angularFire(url, $scope, 'items', []);
    promise.then(function(l) {
      console.log(l);
    });

    // Start off with some fancy words...
    $scope.fancyWords = [
      'Agile',
      'Cloud',
      'Platform'
    ];

    // Add a fancy word!
    $scope.addWord = function(){
      if ($scope.newWord) {
        $scope.fancyWords.push($scope.newWord);
      }

      $scope.newWord = "";
    };
  }]);
