// Регулярное выражение = паттерн + флаги

// new RegExp('pattern', 'flags');
// /pattern/

// let ans = prompt('Введите ваше имя');
// let reg = /n/ig;
// // // console.log(ans.search(reg));
// // console.log(ans.match(reg));
// console.log(reg.test(ans));


// Виды флагов

// i - флаг регистра, говорит что мы хотим найти в независимости от регистра
// g - флаг глобальности, ищет не только первое вхождение
// m - флаг многострочности

// \d \D - Число, не число
// \w \W -Буква, не буква
// \s \S - Пробел, не пробел

// let pass = prompt('Введите пароль');
// console.log(pass.replace(/./g, "*"));
// alert('12-34-56'.replace(/-/g,':'));

// let ans = prompt('Введите число');
// let reg = /\d/g;
// console.log(ans.match(reg));

// let str = 'My name is$ R2D2';
// console.log(str.match(/\$/i));
