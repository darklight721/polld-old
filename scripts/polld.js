'use strict';

// Declare app level module which depends on filters, and services
var polldApp = angular.module('polldApp', ['dpdwire'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/:id', {
        templateUrl: 'views/vote.html',
        controller: 'VoteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

// Define directives
polldApp.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind('keyup', function(event) {
      if (event.keyCode === 13)
        scope.$apply(attrs.ngEnter);
    });
  };
}).directive('navList', function(){
  return {
    restrict: 'E',
    transclude: true,
    template: '<nav><ul ng-transclude></ul></nav>',
    replace: true
  };
}).directive('navItem', function($location){
  return {
    restrict: 'E',
    transclude: true,
    scope: { path: '@' },
    controller: function($scope, $location) {
      $scope.selected = false;
      
      $scope.$watch(function(){
        return $location.path();
      }, function(path){
        $scope.selected = path === $scope.path;
      });
    },
    template: '<li ng-class="{active:selected}"><a ng-href="#{{path}}" ng-transclude></a></li>',
    replace: true
  };
});
