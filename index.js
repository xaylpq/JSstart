"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату", "");
    while (isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", ""); 
    }
}
start();

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// Добавление статей обязательных расходов
function chooseExpenses () {
    for (let i=0; i < 2; i++) {
        let budjetMonth = prompt("Введите обязательную статью расходов", "");
        let summ = prompt("Во сколько обойдется?", "");
        if((typeof(budjetMonth)) === 'string' && (typeof(budjetMonth)) != null 
        && (typeof(summ)) != null && budjetMonth != '' && summ != '' 
        && budjetMonth.length < 50) {
            console.log("Done!");
            appData.expenses[budjetMonth] = summ;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

//Добавление статей необязательных расходов
function chooseOptExpenses() {
    for (let i=1; i < 4; i++) {
        let summ = prompt("Укажите сумму опциональных расходов №" + i, "");
        if((typeof(summ)) != null && summ != '') {
            console.log("Done!");
            appData.optionalExpenses[i] = summ;
        } else {
            i = i - 1;
        }
    }
}
chooseOptExpenses();

// Расчет дневного бюджета
function detectDayBudget() {
    appData.budjetDay = (appData.budjet / 30).toFixed();
    console.log("Бюджет на день составляет: " + appData.budjetDay);
}
detectDayBudget();

// Расчет уровня доходности
function detectLevel() {
    if (appData.budjetDay <= 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.budjetDay > 100 && appData.budjetDay <= 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.budjetDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel();

// Расчет накоплений
function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * persent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

console.log(appData);