// Меняем местами
let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item');
menu.insertBefore(menuItem[2],menuItem[1]); 

// Добавляем еще один элемент
let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

// Меняем картинку на фоне
document.body.style.backgroundImage = "url(img/apple_true.jpg)";

// Редактирование title
let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';

// Удаляем рекламу со старницы
let adv = document.getElementsByClassName('adv')[0];
adv.remove();

// Запись ответа пользователя
let answer = prompt('Как вы относитесь к Apple?', "Я люблю технику Apple"),
    prompts = document.getElementById('prompt');
prompts.textContent = answer;
