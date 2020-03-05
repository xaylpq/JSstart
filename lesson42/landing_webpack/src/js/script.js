//Задание 9: Создаем табы на странице

//window.addEventListener('load') // выполнение будет осуществлятьсся только после загрузки страницы
window.addEventListener('DOMContentLoaded', function() { // выполнение только после загрузки структуры
 
    'use strict';
    let calc = require('./parts/calc'),
        form = require('./parts/form'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        modal = require('./parts/modal');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});