//Задание 9: Создаем табы на странице

//window.addEventListener('load') // выполнение будет осуществлятьсся только после загрузки страницы
window.addEventListener('DOMContentLoaded', function() { // выполнение только после загрузки структуры
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        } 
    });


    // Задание 10: Создаем таймер обратного отсчета на сайте

    let deadline = '2020-03-10';

    // получение даты
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / 1000 / 60 / 60);

        return {
            'total':t,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        };
    }

    // таймер
    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        // обновление каждую секунду
        function updateClock () {
            let t = getTimeRemaining(endtime);

            // обработка исключения если количество меньше 10
            function map(i){
                if(i <= 9) {
                    return '0' + i;
                } else return i;
            };

            hours.textContent = map(t.hours);
            minutes.textContent = map(t.minutes);
            seconds.textContent = map(t.seconds);

            // остановка таймера
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);


    // Задание 11: Создаем модальное окно и работаем с this

    let more = document.querySelector('.more'),
        descriptionBtn = document.querySelector('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    // присваивается только первому элементу. ПЕРЕДЕЛАТЬ
    descriptionBtn.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        descriptionBtn.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    // Задание 13: Реализация скрипта отправки данных из формы

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status'); // добавляем клас созданному блоку div


    // отправка данных с модального окна
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // отменяем стандартное поведение браузера, чтобы страница не перезагружалась
        form.appendChild(statusMessage); // при поведении submit, успешной передаче данных добавляем блок

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php'); // отправка в файл server.php
        request.setRequestHeader('Contetn-Type', 'application/json; charset=utf-8'); // то что мы отправляем это данные из формы

        let formData = new FormData(form);

        //преобразуем данные в json формат
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj); // превращаем обычный объект в объект JSON


        request.send(json);
        // отправка запроса осуществлена

        // вывод сообщения пользователю
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }

    });


    // отправка данных с формы
    let contactForm = document.querySelector('#form'),
        inputs = contactForm.querySelectorAll('input');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // отменяем стандартное поведение браузера, чтобы страница не перезагружалась
        contactForm.appendChild(statusMessage); // при поведении submit, успешной передаче данных добавляем блок

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php'); // отправка в файл server.php
        request.setRequestHeader('Contetn-Type', 'application/json; charset=utf-8'); // то что мы отправляем это данные из формы

        let formData = new FormData(contactForm);

        //преобразуем данные в json формат
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj); // превращаем обычный объект в объект JSON


        request.send(json);
        // отправка запроса осуществлена

        // вывод сообщения пользователю
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }

    });
}); 
