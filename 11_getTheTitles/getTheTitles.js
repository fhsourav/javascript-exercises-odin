const getTheTitles = function(arr) {
	arrNames = [];

	arr.forEach(book => {
		arrNames[arrNames.length] = book.title;
	});

	return arrNames;
};

// Do not edit below this line
module.exports = getTheTitles;
