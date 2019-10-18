function add (x,y) {
	return x + y;
}

function subtract (x,y) {
	return x - y;
}

function sum (arr) {
	total = 0;
	arr.forEach((num) => {
		total += num;
	});
	return total;
}

function multiply (arr) {
	total = 1;
	arr.forEach((num) => {
		total *= num;
	});
	return total;
}

function power(a, x) {
	return a ** x;
}

function factorial(n) {
	let x = 1;
	for (let i=n; i > 0; i--) {
		x *= i;
	}
	return x;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}