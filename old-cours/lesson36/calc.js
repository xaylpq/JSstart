// Урок 36. AJAX


let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //status 
    //statusText - Ok or Not Found
    //responseText / response
    //readyState

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response); // response - ответ с сервера(полученые данные)
            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = 'Что-то пошло не так...';
        }
    });
});

inputUsd.addEventListener('input', () => { //получение рублей по вводимим долларам
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //status 
    //statusText - Ok or Not Found
    //responseText / response
    //readyState

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response); // response - ответ с сервера(полученые данные)
            inputRub.value = inputUsd.value * data.usd;
        } else {
            inputRub.value = 'Что-то пошло не так...';
        }
    });
});