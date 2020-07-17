'use strict';

const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// };

let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// const link = document.querySelector('a');

// link.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log(event.target);
// });

btns.forEach(element => {
    element.addEventListener('click', deleteElement, {once: true});
});