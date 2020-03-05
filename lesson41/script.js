
// создание модулей
// 1)
let number = 1;

(function() {
    let number = 2;
    console.log(number);

    return console.log(number + 3);
}())

console.log(number);

// 2) Использование объектного интерфейса
let user = (function() {
    let privat = function() {
        console.log('I am privat')
    }

    return {
        sayHello : function() {
            console.log('Hello!')
        }
    }
}())

console.log(user);
console.log(user.sayHello());

// 3) использование
let user3 = (function() {
    let privat = function() {
        console.log('I am privat')
    }

    let sayHello = function() {
        console.log('Hello!')
    }
    return {
        sayHello : sayHello
    }
}())

console.log(user3);
console.log(user3.sayHello());