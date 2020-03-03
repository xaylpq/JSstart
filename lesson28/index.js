// Урок 28. Стандарт ES6. Интерполяция

// let name = 'Ivan',
//     age = 30,
//     mail = 'example@example.com';

// document.write('Пользователю ' + name + ' ' + age + ' лет. Его почтовый адрес:' + mail);
// document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`); // интерполяция в es6



// 29. ES6. let и const

// function makeArray() {
//     var items = [];

//     for(let i = 0; i < 10; i++) { //var используется одна навесь цикл. она не создается заново каждый раз
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }

//     return items;
// }

// var arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();


// 30. ES6. Стрелочные функции

// let fun = () => {
//     console.log(this);
// };

// fun();

// 1) стрелочная функция анонима(мы не можем ей задать имени) только поместить в переменную
// 2) нельзя управлять обработчиками событий 
// 3) не можем запускать эту функцию внутри себя(рекурсия)
// 4) своего контекста вызова стрелочная функция не имеет

// let obj = {
//     number: 5,
//     sayNumber: function() {
//         let say = () => {
//             console.log(this);
//         };
//         say();
//     }
// };

// obj.sayNumber();

// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     let show = () => {
//         console.log(this);
//     };
//     show();
// });


// 31. ES6. Параметры по умолчанию

// function calcOrDouble(number, basis) {
//    basis = basis || 2; // если значение не передано, то будет 2(es5)
//     console.log(number*basis);
// }

// calcOrDouble(5, 3);
// calcOrDouble(5);

// в формате es6 можно добавлять параметр по умолчанию в определение функции
// function calcOrDouble(number, basis = 2) {
//      console.log(number*basis);
//  }
 
//  calcOrDouble(5, 3);
//  calcOrDouble(5);


// 32. ES6. Классы

// class Rectangle {
//     constructor(height, width = 20) {
//         this.height = height;
//         this.width = width;
//     }       // между свойствами и методами запятые ставить нельзя, будет ошибка
//     calcArea() {
//         return this.height * this.width;
//     }
// }
// const square = new Rectangle(10);
// console.log(square.calcArea());


// 33. ES6. Spread-операторы

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

// spread-оператор разварачивает массивы
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numbers = [2, 5, 7];

log(...numbers);
