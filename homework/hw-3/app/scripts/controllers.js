angular.module('app.controllers', ['app.services'])
.controller('main', function($scope, RandomArrayValue, Pair) {


	$scope.callRandomArrayValue = function() {
		var myArray = ['test', 'james', 'roger', 'mickey'];
		RandomArrayValue(myArray);
	};

	$scope.createPair = function() {
		var studentList = ["alex", "james", "rick", "gabe", "ryan", "traivs", "aaron", "erica"];
		var pairedList = [];
		Pair(studentList);
	};

});
