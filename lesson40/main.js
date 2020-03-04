// 40. Современные библиотеки и фрэймворки. JQuery, как устроена $

$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );
    });
});

// document.querySelectorAll('.list-item').forEach();
// .classList
// .addEventListener
// $.ajax - fetch
// animations

// Angular(google)
// 1) Установить node.js
// 2) Установка пакетов
// 3) Язык type script
// 4) сборщик модулей, webpack
// 5) MVC - раздел логики на визуальную, контролирующую и выполняющее действие(model view control)
// 6) Angular

// React(facebook)
// 1) Установить node.js
// 2) Установка пакетов
// 3) babel
// 4) JSX-препроцессор
// 5) React
// 6) webpack

// Vue
// 1) Установить node.js
// 2) Установка пакетов
// 3) babel
// 4) webpack
