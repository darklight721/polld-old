'use strict';

polldApp.controller('VoteCtrl', ['$scope', '$routeParams', '$window', 'Polls', function($scope, $routeParams, $window, Polls) {
  $scope.poll = {};

  Polls.get($routeParams.id, function(poll, error){
  	console.log(poll);
  	if (error) {
  		console.log(error);
  		$window.location.href = '#';
  	}
  	else {
  		$scope.$apply(function(){
  			$scope.poll = poll;
  		});
  	}
  });

}]);
