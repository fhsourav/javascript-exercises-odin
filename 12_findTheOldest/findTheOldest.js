const findTheOldest = function(array) {
	
	function maxYear(array) {
		let max = array[0].yearOfBirth;
		array.forEach(person => {
			if (typeof(person.yearOfBirth) != "undefined"){
				if (person.yearOfBirth > max) {
					max = person.yearOfBirth;
				}
			}
			if (typeof(person.yearOfDeath) != "undefined") {
				if (person.yearOfDeath > max) {
					max = person.yearOfBirth;
				}
			}
		});
		// const arrYear = array.map((person) => (person.yearOfBirth)) + array.map((person) => (person.yearOfDeath));
		return max;
	}

	let ageArr = [];

	array.forEach(person => {
		if (typeof(person.yearOfDeath) != "undefined") {
			ageArr[ageArr.length] = person.yearOfDeath - person.yearOfBirth;
		} else {
			let maxYearOfDeath = maxYear(array);
			console.log(maxYearOfDeath);
			ageArr[ageArr.length] = maxYearOfDeath - person.yearOfBirth;
		}
	});

	// const ageArr = array.map((person) => (person.yearOfDeath - person.yearOfBirth));
	console.log(ageArr);
	let maxIdx = 0;
	for (let i = 1; i < ageArr.length; i++) {
		if (ageArr[i] > ageArr[maxIdx]) {
			maxIdx = i;
		}
	}
	return array[maxIdx];
};

// Do not edit below this line
module.exports = findTheOldest;
