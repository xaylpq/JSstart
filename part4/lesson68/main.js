'use strict';

const persone = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    },
};

console.log(persone.userAge = 30);
console.log(persone.userAge);