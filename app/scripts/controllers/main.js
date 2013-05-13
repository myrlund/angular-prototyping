'use strict';

angular.module('PrototypingApp')
  .controller('MainCtrl', function ($scope) {

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
    }
  });
