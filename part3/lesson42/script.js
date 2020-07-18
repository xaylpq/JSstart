'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

// const width = box.clientWidth;
// const width1 = box.offsetWidth;
// const width2 = box.scrollWidth;
// const height2 = box.scrollHeight;

console.log(document.documentElement.clientWidth); //ширина окна элемента
console.log(document.documentElement.clientHeight); // высота окна документа
console.log(document.documentElement.scrollTop); // сколько пикселей прокручено

btn.addEventListener('click', function() {
    box.scrollTop = 100;
});

scrollBy(0, 200); // перемещаем страницу по координатам от текущего местоположения
scrollTo(0, 200); // перемещаем страницу по координатам от начала страницы

// btn.addEventListener('click', () => {
//     //box.style.height = box.scrollHeight + 'px';
//     console.log(box.scrollTop);
// });

