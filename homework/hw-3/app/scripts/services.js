angular.module('app.services', [])
.factory('RandomArrayValue', function() {
	// Create a way to get a random integer based on that arrays length

	return function getRandomInt(myArray) {
	   var randomArrayPos = Math.floor(Math.random() * (myArray.length - 0)) + 0;
	   // console.log(myArray[randomArrayPos]);
	   return randomArrayPos;
	};

})
.factory('Pair', function(RandomArrayValue) {
	return function randomPair(studentList) {
		for(i=0; i < studentList.length; i+2) {
			myPair = [];
			myPair += studentList.splice(RandomArrayValue(), 1) + " ";
			myPair += studentList.splice(RandomArrayValue(), 1);

			pairedList.push(myPair);
		}
		console.log(pairedList);
		// return pairedList;
	};
});
