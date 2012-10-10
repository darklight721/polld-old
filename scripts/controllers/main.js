'use strict';

polldApp.controller('MainCtrl', function($scope, Polls) {
  $scope.poll = { choices : [] };
  
  $scope.addChoice = function() {
  	if ($scope.newChoice) {
  		$scope.poll.choices.push({
        name: $scope.newChoice,
        count: 0
      });
  		$scope.newChoice = '';
  	}
  };
  
  $scope.removeChoice = function(index) {
    $scope.poll.choices.splice(index, 1);
  };

  $scope.save = function() {
    if (form.$valid) {
      Polls.post(angular.toJson($scope.poll), function(results, error){
        console.log(results + ' ' + error);
      });
    }
  };

});
