// 38. Как сохранить данные без БД. Работа с localStorage

// localStorage.setItem('number', 1);

// console.log(localStorage.getItem('number'));

// localStorage.removeItem('number');

// localStorage.clear();

window.addEventListener('DOMContentLoaded', function() {

    // отметка чекбокса остается
    let checkbox = document.getElementById('rememberMe');

    if (localStorage.getItem('isChecked') == 'true') {
        checkbox.checked = true;
    }

    checkbox.addEventListener('click', function() {
        localStorage.setItem('isChecked', true);
    });

    // цвет фона формы
    let change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];
    if (localStorage.getItem("bg") === 'changed') {
        form.style.backgroundColor = '#9AA7E0';
    }

    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = '#9AA7E0';
    });

    // сохранение данных
    let persone = {
        name: 'Alex',
        age: 25,
        tech: ['mobile', 'notebook']
    }

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem('Alex', serializedPersone);

    console.log(JSON.parse(localStorage.getItem('Alex')));


});