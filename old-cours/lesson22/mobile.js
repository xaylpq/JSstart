window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', function(e) {
        e.preventDefault();
        console.log("Red box: touchstart");
        console.log(e.target); //получаем элемент с которым взаимодействуем
        console.log(e.touches[0].target); // получаем элемент с которым взаимодействует первый палец
        console.log(e.touches);  // сколько пальцев на сенсоре
        console.log(e.changeTouches); // список пальцев взаимодействующих с сенсором
        console.log(e.targetTouches); // сколько пальцев взаимодействует с конкретными элементами
    });


    
    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log("Red box: touchmove" + e.touches[0].pageX); // Исследование координат
    });    

    box.addEventListener('touchend', function(e) {
        e.preventDefault();
        console.log("Red box: touchend");
    });
});
