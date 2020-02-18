"use strict";

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату", "");
let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i=0; i < 2; i++) { // Вариант с урока
    let budjetMonth = prompt("Введите"  + 
    "обязательную статью расходов в этом месяце", "");
    let summ = prompt("Во сколько обойдется?", "");
    if((typeof(budjetMonth)) === 'string' && (typeof(budjetMonth)) != null 
    && (typeof(summ)) != null && budjetMonth != '' && summ != '' 
    && budjetMonth.length < 50) {
        console.log("Done!");
        appData.expenses[budjetMonth] = summ;
    } else {}
}

/*
let i = 0; // Вариант с циклом do while
do {
    let budjetMonth = prompt("Введите"  + 
    "обязательную статью расходов в этом месяце", "");
    let summ = prompt("Во сколько обойдется?", "");
    if((typeof(budjetMonth)) === 'string' && (typeof(budjetMonth)) != null 
    && (typeof(summ)) != null && budjetMonth != '' && summ != '' 
    && budjetMonth.length < 50) {
        console.log("Done!");
        appData.expenses[budjetMonth] = summ;
    i++;
    } else {}
} while (i < 2)
*/

/*
let i = 0; // Вариант с циклом while
while (i < 2) {
    let budjetMonth = prompt("Введите"  + 
    "обязательную статью расходов в этом месяце", "");
    let summ = prompt("Во сколько обойдется?", "");
    if((typeof(budjetMonth)) === 'string' && (typeof(budjetMonth)) != null 
    && (typeof(summ)) != null && budjetMonth != '' && summ != '' 
    && budjetMonth.length < 50) {
        console.log("Done!");
        appData.expenses[budjetMonth] = summ;
    i++;
    } else {}
}
*/

appData.budjetDay = appData.budjet / 30;
console.log("Бюджет на " + time + " составляет: " + appData.budjetDay);

if (appData.budjetDay <= 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.budjetDay > 100 && appData.budjetDay <= 2000) {
    console.log('Средний уровень достатка');
} else if (appData.budjetDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
