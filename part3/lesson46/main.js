'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4,5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         // function shout(){
//             console.log(this);
//         // }
//         // shout();
//     }

// };

// obj.sum();

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

let ivan = new User('Ivan', 23);


