angular.module('app.services', [])
.factory('RandomArrayValue', function() {
	// Create a way to get a random integer based on that arrays length

	return function getRandomInt(myArray) {
	   var randomArrayPos = Math.floor(Math.random() * (myArray.length - 0)) + 0;
	   // console.log(myArray[randomArrayPos]);
	   return randomArrayPos;
	};

})
.factory('Pair', function() {
	return function randomPair(studentList) {

		for(i=0; i < studentList.length; i+2) {
			var pairedList = [];
			var randomArrayPos = Math.floor(Math.random() * (studentList.length - 0)) + 0;
			myPair = [];
			myPair += studentList.splice(randomArrayPos(), 1) + " ";
			myPair += studentList.splice(randomArrayPos(), 1);

			pairedList.push(myPair);
		}
		console.log(pairedList);
		// return pairedList;
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
