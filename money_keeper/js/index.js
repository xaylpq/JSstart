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
    savings: true,
    chooseExpenses: function() {  // Добавление статей обязательных расходов
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
    },
    detectDayBudget: function() {  // Расчет дневного бюджета
        appData.budjetDay = (appData.budjet / 30).toFixed();
        console.log("Бюджет на день составляет: " + appData.budjetDay);
    },
    detectLevel: function() {  // Расчет уровня доходности
        if (appData.budjetDay <= 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.budjetDay > 100 && appData.budjetDay <= 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.budjetDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() { // Расчет накоплений
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                persent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * persent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() { //Добавление статей необязательных расходов
        for (let i=1; i < 4; i++) {
            let summ = prompt("Укажите сумму опциональных расходов №" + i, "");
            if((typeof(summ)) != null && summ != '') {
                console.log("Done!");
                appData.optionalExpenses[i] = summ;
            } else {
                i = i - 1;
            }
        }
    },
    chooseIncome: function() { // дополнительный доход
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую) ', '');
        if (typeof(items) === 'string' || items != '' || typeof(items) != null) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую) ', '');
        } 
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();

        appData.chooseIncome.forEach(function(item, i) {
            alert("Способы доп. заработка: " + (i+1) + item);
        });

    }
};

console.log(appData);


for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}