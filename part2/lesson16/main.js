'use strict';

function showFirstMessage(text) { // function declaration
	console.log(`${text}`);

}
showFirstMessage('hi');

let sumAB = function(a, b) { // function expression
	return a + b;
};
sumAB();

const calc = (a, b) => { // arrows function
	console.log(1);
	return a + b;
};

