function form() {
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
}

module.exports = form;