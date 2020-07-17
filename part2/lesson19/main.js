'use strict';

function first() {
	// Do somethyng
	setTimeout(function() {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second();


function learnjS(lang, callback) {
	console.log(`Я учу ${lang}`);
	callback();
}

learnjS('JavaScript', function() {
	console.log('Я прошел этот урок!');
});

