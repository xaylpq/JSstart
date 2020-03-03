// Урок 37. ES6. Promise

let drink = 0;

function shot(arrow, headshot, fail) {
    console.log('Вы сделали выстрел...');

    setTimeout(function() {
        Math.random() > .5 ? headshot({}) : fail("Вы промахнулись");
    }, 3000)
};

function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво!');
}

function giveMoney() {
    console.log('Вам заплатили!');
}


function loose() {
    console.log('Вы проиграли!');
}

shot({}, 
        function(mark) {
            console.log('Вы попали в цель!');
            win(mark, buyBeer, giveMoney);
        },
        function(miss) {
            console.error(miss);
            loose();
        }
    )