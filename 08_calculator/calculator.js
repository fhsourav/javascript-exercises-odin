const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let total = 0;
  arr.forEach((n) => {
    total += n;
  });
  return total;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach((n) => {
    product *= n;
  })
  return product;
};

const power = function(n, p) {
  let result = 1;
	for (let index = 0; index <= p; index++) {
    if (index == 0) {
      continue;
    }
    result *= n;
  }
  return result;
};

const factorial = function(n) {
	let result = 1;
  for (let index = 1; index <= n; index++) {
    result *= index;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
