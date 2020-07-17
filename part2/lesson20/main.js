'use strict';

const options = {
	name: 'test',
	with: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}, makeTest: function() {
		console.log('test');
	}
};

console.log(options.name);
delete options.name;
console.log(options);

for (let key in options) {
	if (typeof(options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
	}
}

console.log(Object.keys(options).length);

options.makeTest();

// Деструктуризация объектов
const {border, bg} = options.colors;
console.log(border);

