"use strict";

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату", "2020-01-01");

let budjetMonth1 = prompt("Введите"  + 
    "обязательную статью расходов в этом месяце", "");
let summ1 = +prompt("Во сколько обойдется?", "");
let budjetMonth2 = prompt("Введите" + 
    "обязательную статью расходов в этом месяце", "");
let summ2 = +prompt("Во сколько обойдется?", "");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {
        budjetMonth1: summ1,
        budjetMonth2: summ2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

let budjetDay = (money - summ1 - summ2) / 30;
console.log("Бюджет на " + time + " составляет: " + budjetDay);

/*
Вопросы к заданию 1

1.Сколько типов данных существует в JS?
Ответ: 7.

2.Как вывести информацию в консоль?
Ответ: console.log().

3.Какая функция операторов || и &&?
Ответ: Операторы ИЛИ и И соответственно.

*/
