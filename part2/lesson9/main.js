'use strict';

let a = 5, b = '4';

console.log(a + b); // 54

let incr = 10, decr = 10;
--incr; // 9
++decr; // 11

incr++; // 10
decr++; // 10

console.log(5 % 2); // 1
console.log(2 * 4 == '8'); // true
console.log(2 * 4 === '8'); // false

const isChecked = true,
        isClose = false;

console.log(isChecked && isClose); // false
console.log(isChecked || isClose); // true
console.log( !isClose ); // true

