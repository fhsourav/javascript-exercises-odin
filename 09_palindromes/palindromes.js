const palindromes = function (str) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789"
	str = str.toLowerCase();
	let forwardCount = 0;
	let backwardCount = str.length - 1;
	while (forwardCount < backwardCount) {
		let chForward = str.charAt(forwardCount);
		let chBackward = str.charAt(backwardCount);
		if (!alphabet.includes(chForward)) {
			forwardCount++;
			continue;
		}
		if (!alphabet.includes(chBackward)) {
			backwardCount--;
			continue;
		}
		if(chForward != chBackward) {
			return false;
		}
		forwardCount++;
		backwardCount--;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
