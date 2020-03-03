// 26. Конструкторы и классы(формат es6)

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello () {
        console.log(`Hello! ${this.name}`)
    }
    exit () {
        console.log(`Пользователь ${this.name} ушел`);
    }
}

let ivan = new User('Ivan', 25);
let alex = new User('Alex', 20);
console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

ivan.exit();


// 26. Конструкторы и классы(формат es2015)

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() { //метод хелло, здороватеся с пользователем
//         console.log('Hello! ' + this.name);
//     };
// }

// User.prototype.exit = function(name) { // свойство прототайп может добавлять новые методы в конструктор и они будут наследоваться у потомков
//     console.log('Пользователь ' + this.name + ' ушел');
// }


// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

