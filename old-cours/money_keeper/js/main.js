'use strict';

let startBtn = document.getElementById('start'),
    // вывод справа
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    // поля обязательных расходов
    expensesItem = document.getElementsByClassName('expenses-item'),
    // кнопки
    approve1 = document.getElementsByTagName('button')[0],
    approve2 = document.getElementsByTagName('button')[1],
    calculate = document.getElementsByTagName('button')[2],
    // поля для ввода необязательных расходов
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    // статьи возможного дохода
    chooseIncome = document.querySelector('.choose-income'), 
    // чекбокс
    checkSavings = document.querySelector('#savings'),
    // сумма
    summ = document.querySelector('#sum'),
    // проценты
    percent = document.querySelector('#percent'),
    // дата
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    
let money, time;

// Деактивация кнопок до начала работы
approve1.disabled = true;
approve2.disabled = true;
calculate.disabled = true;


// Начать расчет
startBtn.addEventListener('click', function() {
    
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null ) {
        money = prompt("Ваш бюджет на месяц?", ""); 
    }
    
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDay();

    approve1.disabled = false;
    approve2.disabled = false;
    calculate.disabled = false;
});


// Добавление статей обязательных расходов
approve1.addEventListener('click', function() { 
    let sum = 0;

    for (let i=0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;

        if((typeof(a)) === 'string' && (typeof(a)) != null  && (typeof(b)) !=
          null && a != '' && b != ''  && a.length < 50) {
            console.log("Done!");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    appData.sumExp = sum;
    expensesValue.textContent = sum;
});

// Добавление статей необязательных расходов
approve2.addEventListener('click', function() {
    for (let i = 0; i < optionalExpenses.length; i++) {
        let opt = optionalExpenses[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

// Расчет бюджета
calculate.addEventListener('click', function() {

    if (appData.budget != undefined && appData.sumExp != undefined ) {
        appData.budgetDay = ((appData.budget - appData.sumExp) / 30).toFixed();
        daybudgetValue.textContent = appData.budgetDay;
        if (appData.budgetDay <= 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.budgetDay > 100 && appData.budgetDay <= 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.budgetDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        daybudgetValue.textContent = 'Утвердите обязательные расходы';
    }
});


// Дополнительный доход
chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});


// Чекбокс
checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});


// Расчет накоплений
summ.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +summ.value, 
            persents = +percent.value;

        appData.monthIncome = sum / 100 / 12 * persents;
        appData.yearIncome = sum / 100 * persents;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +summ.value, 
            persents = +percent.value;

        appData.monthIncome = sum / 100 / 12 * persents;
        appData.yearIncome = sum / 100 * persents;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


console.log(appData)