'use strict';

if (4 == 9) {
        console.log('OK!');
} else {
        console.log('Error!');
}

const num = 50;

if (num < 49) {
        console.log('Error!');
} else if (num > 100) {
        console.log('Many');
} else {
        console.log('OK!');
}

(num === 50) ? console.log('OK') : console.log('Error');

switch (num) {
        case 49: 
                console.log('Error!');
                break;
        case 50:
                console.log('OK!');
                break;
        default: 
        console.log('Не в этот раз!');
}

