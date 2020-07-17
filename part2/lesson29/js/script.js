'use strict';

const box = document.getElementById('box');

const btns = document.getElementsByTagName('button');
console.log(btns[0]);

const circles = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item); 
});

const oneHeart = document.querySelector('.heart');


box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

div.classList.add('black');

const wrapper = document.querySelector('.wrapper');

// wrapper.append(div);
// wrapper.appendChild(div);
//wrapper.prepend(div);

// hearts[0].before(div);
hearts[0].after(div);
circles[0].remove();

// wrapper.insertBefore(div, hearts[0]); // старый метод

div.innerHTML = 'hello world';
div.innerText = 'hello world';
div.insertAdjacentHTML('beforeend', 'hi');
div.insertAdjacentHTML('afterend', 'hi');