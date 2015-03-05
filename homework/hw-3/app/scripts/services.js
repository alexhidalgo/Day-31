angular.module('app.services', [])
.factory('RandomArrayValue', function() {
	// Create a way to get a random integer based on that arrays length

	return function (myArray) {
	   var randomArrayPos = Math.floor(Math.random() * (myArray.length - 0)) + 0;

	   console.log(randomArrayPos);
	};

})
.factory('Pair', function () {
	//Create random pair of studentList in Ctrl
	return function (studentList) {

		var randomArrayPos = function() {
				return Math.floor(Math.random() * (studentList.length - 0)) + 0
			};

		var randomPosition = function () {
				return randomArrayPos(studentList);
			};

		for(i=0; i < studentList.length; i+2) {
			// console.log(studentList.length);
			var pairedList = [];
			var myPair = [];

			myPair += studentList.splice(randomPosition(), 1) + " ";
			// myPair += studentList.splice(randomPosition(), 1) + " ";
			// myPair += studentList.splice(randomPosition(), 1) + " ";
			// myPair += studentList.splice(randomPosition(), 1) + " ";
			// myPair += studentList.splice(randomPosition(), 1) + " ";
			// myPair += studentList.splice(randomPosition(), 1) + " ";
			// myPair += studentList.splice(randomPosition(), 1) + " ";
			// myPair += studentList.splice(randomPosition(), 1);
			//
			pairedList.push(myPair);
			console.log(pairedList);
		}


	};

})
.factory('SplitString', function() {
	return function sliceCounter(string) {
			var newString = "";
			for(i=0; i<string.length; i++) {
				newString += string.slice(i, i+1) + "-";
				console.log(newString);
			}
		};

		sliceCounter(myString);
});
