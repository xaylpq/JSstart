let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.clientWidth, //размеры окна .box
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth); //ширина окна элемента
console.log(document.documentElement.clientHeight); // высота окна документа
console.log(document.documentElement.scrollTop); // сколько пикселей прокручено

btn.addEventListener('click', function() {
    box.scrollTop = 0;
});

scrollBy(0, 200); // перемещаем страницу по координатам от текущего местоположения
scrollTo(0, 200); // перемещаем страницу по координатам от начала страницы
