//Урок 23. Скрипты и время их выполнения. setTimeout и setInterval.

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId); // отменяет действие setTimeout

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId); // отменяет действие setTimeout

// function sayHello() {
//     console.log('Hello world!');
// }

//Чем рекурсивный setTimeout лучше чем setInterval?
//Когда таймер с интервалом работает он не учитывает как долго будет работать функция внутри него.

// let timerId = setTimeout(function log() { // Рекурсивный setTimeout
//     console.log('Hello');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.first')) {
        console.log('Это работает');
    }
});