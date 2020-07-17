function calc() {
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
}

module.exports = calc;