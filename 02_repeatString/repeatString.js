const repeatString = function(givenString, repeat) {
	if (repeat < 0) {
		return 'ERROR';
	}
	let finalString = '';
	for (let i = 0; i < repeat; i++) {
		finalString += givenString;
	}
	return finalString;
};

// Do not edit below this line
module.exports = repeatString;
