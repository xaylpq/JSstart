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
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        formBottom = document.querySelector('#form');
        statusMessage.classList.add('status'); // добавляем класс созданному блоку div

    //функция отправки через промисы
    function sendForm(elem) {
        elem.addEventListener('submit', function(e) {
            e.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                function postData(data) {

                    return new Promise(function(resolve, reject) {
                        let request = new XMLHttpRequest();

                        request.open('POST', 'server.php');

                        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {
                                resolve()
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.readyState < 3) {
                                    resolve()
                                }
                                else {
                                    reject()
                                }
                            }
                        }

                        //преобразуем данные в json формат
                        let obj = {};
                        formData.forEach(function(value, key) {
                            obj[key] = value;
                        });
                        let json = JSON.stringify(obj); // превращаем обычный объект в объект JSON

                        request.send(json);
                    })
                } // End postData

                function clearInput() {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                }

                postData(formData)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(()=> {
                        statusMessage.innerHTML = message.success;
                    })
                    .catch(()=> statusMessage.innerHTML = message.failure)
                    .then(clearInput)
        });
    }
    sendForm(form);
    sendForm(formBottom);


    // Слайдер
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) { // старая запись
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });


    // калькулятор

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() { // не используем стрелочные функции потому что есть контекст вызова this
        personsSum = +this.value;

        if (restDays.value == '' || persons.value == '') {
            total = 0;
        } else {
            total = (daysSum + personsSum) * 4000;
        }

        if(restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }

        // удалить баг расчета при очистке
    });

    restDays.addEventListener('change', function() { // не используем стрелочные функции потому что есть контекст вызова this
        daysSum = +this.value;

        if (restDays.value == '' || persons.value == '') {
            total = 0;
        } else {
            total = (daysSum + personsSum) * 4000;
        }

        if(persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        if (restDays == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    })

});