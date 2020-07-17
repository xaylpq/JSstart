'use strict';

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log('hello!');
	},
};

// const john = {
// 	health: 100,
// };
// john.__proto__ = soldier;
// console.log(john.armor);

const john = Object.create(soldier);
Object.setPrototypeOf(john, soldier);
john.sayHello();
