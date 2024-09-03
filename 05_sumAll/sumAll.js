const sumAll = function(lim1, lim2) {
	let min = -1;
	let max = -1;
	if (typeof(lim1) != 'number' || typeof(lim2) != "number") {
		return "ERROR";
	}
	if (lim1 % 1 != 0 || lim2 % 1 != 0) {
		return "ERROR";
	}
	if (lim1 < 0 || lim2 < 0) {
		return "ERROR";
	}
	if (lim1 > lim2) {
		min = lim2;
		max = lim1;
	} else {
		min = lim1;
		max = lim2;
	}
	let sum = (min + max) * (max - min + 1) / 2;
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
