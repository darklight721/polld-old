'use strict';

polldApp.controller('HeaderCtrl', function($scope, $location) {
  $scope.links = {};
  
  function resetLinks() {
	for (var link in $scope.links)
		$scope.links[link] = '';
  }
  
  function normalizePath(path) {
	return path.slice(1) || 'home';
  }
  
  $scope.$watch(
	function() {
		return $location.path(); 
	}, 
	function(path) {
		resetLinks();
		$scope.links[normalizePath(path)] = 'active';
	}
  );
  
});
