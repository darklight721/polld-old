'use strict';

polldApp.controller('MainCtrl', ['$scope', '$location', 'Polls', function($scope, $location, Polls) {
  $scope.poll = { choices : [] };
  $scope.errors = {};
  
  $scope.addChoice = function() {
  	if ($scope.newChoice) {
  		$scope.poll.choices.push({
        name: $scope.newChoice,
        count: 0
      });
  		$scope.newChoice = '';
  	}
    else {
      $scope.errors.newChoice = true;
    }
  };
  
  $scope.removeChoice = function(index) {
    $scope.poll.choices.splice(index, 1);
  };

  $scope.save = function() {
    if (isValidated()) {
      Polls.post(angular.toJson($scope.poll), function(poll, error){
        $scope.$apply(function(){
          if (error || !poll) {
            $scope.errors.post = true;
          }
          else {
            $scope.errors.post = false;
            $location.path('/' + poll.id);
          }
        });
      });
    }
  };

  $scope.isChoiceEmpty = function(index) {
    return $scope.poll.choices[index].name ? false : true;
  };

  $scope.isChoiceDuplicate = function(index) {
    var currentChoice = $scope.poll.choices[index];
    return _.any($scope.poll.choices, function(choice, idx){
      return (index !== idx) ? currentChoice.name === choice.name : false;
    });
  };

  function isQuestionEmpty() {
    $scope.errors.question = $scope.poll.question ? false : true;
    return $scope.errors.question;
  };

  function hasNoChoices() {
    $scope.errors.choices = $scope.poll.choices.length === 0 ? true : false;
    return $scope.errors.choices;
  }

  function isValidated() {
    var hasErrors = false;

    hasErrors = isQuestionEmpty();
    hasErrors = hasNoChoices() || hasErrors;
    hasErrors = _.any($scope.poll.choices, function(choice,index){
      return $scope.isChoiceEmpty(index) || $scope.isChoiceDuplicate(index);
    }) || hasErrors;

    return !hasErrors;
  };

}]);
