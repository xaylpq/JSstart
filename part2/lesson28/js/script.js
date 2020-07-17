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
