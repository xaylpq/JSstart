'use strict';

let start = document.getElementById('start'),
    // вывод справа
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    // поля обязательных расходов
    expensesItem = document.getElementsByClassName('expenses-item'),
    // кнопки
    approve1 = document.getElementsByTagName('button')[0],
    approve2 = document.getElementsByTagName('button')[1],
    calculate = document.getElementsByTagName('button')[3],
    // поля для ввода необязательных расходов
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    // статьи возможного дохода
    chooseIncome = document.querySelector('.choose-income'), 
    // чекбокс
    checkBox = document.querySelector('#savings'),
    // сумма
    sum = document.querySelector('#sum'),
    // проценты
    percent = document.querySelector('#percent'),
    // дата
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
