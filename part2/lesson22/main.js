'use strict';

let a = 5, b = a; // передает значение
b = b + a;

const obj = {
	a: 5,
	b: 10,
};

const copy = obj; // передает ссылку

copy.a = 10;

function copyf(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}

const numbers = {
	a: 2,
	b: 5, c: {
		x: 7,
		y: 4,
	}
};

const newNumbers = copyf(numbers);

newNumbers.a = 10;
console.log(newNumbers)

// Оператор разворота
const abc = ['1', '2'],
	bcd = [...abc, '3', '4', '5'];

console.log(bcd);