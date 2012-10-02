'use strict';

polldApp.controller('MainCtrl', function($scope) {
  $scope.poll = { choices : [] };
  
  $scope.addChoice = function() {
  	if ($scope.newChoice) {
  		$scope.poll.choices.push($scope.newChoice);
  		$scope.newChoice = '';
  	}
  };
  
  $scope.removeChoice = function(index) {
    $scope.poll.choices.splice(index, 1);
  };

});
