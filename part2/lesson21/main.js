'use strict';

const arr = [1, 2, 3, 6, 8];

arr.pop(); 				// удаляет последний
arr.push(10); 			// добавляет в конец
console.log(arr.length); // длина массива

// перебор массива
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for( let value of arr) {
	console.log(value);
}

arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt('Введите строку через запятую', 'яблоки, сливы, морковь');
const propducts = str.split(', ');
console.log(propducts.join('# '));
arr.sort(compareNum);

function compareNum(a, b) {
	return a - b;
}
