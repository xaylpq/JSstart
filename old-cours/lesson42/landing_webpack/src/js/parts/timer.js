function timer () {
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
 
}

module.exports = timer;