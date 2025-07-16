import {input} from '../input.js';

//console.log(input);



const inputFeed = input.split('');

let total = 0;

let val1 = 0;
let val2 = 0;
let reg = '';

while (inputFeed.length > 0) {
    let c = inputFeed.shift();

    if ( c === 'm' || c === 'u' || c === 'l' ) {
        if (c === 'm') {
            val1 = 0;
            val2 = 0;
            reg = '';
        }
        reg = reg.concat(c);
    }
    else if ( c === '(' && reg === 'mul' ) {
        while (inputFeed.length > 0) {
            c = inputFeed.shift();
            if ( !isNaN(parseInt(c)) ) {
                val1 = (val1 * 10) + parseInt(c);
            } else {
                break;
            }
        }
        if ( c === ',' && val1 > 0 ) {
            while (inputFeed.length > 0) {
                c = inputFeed.shift();
                if ( !isNaN(parseInt(c)) ) {
                    val2 = (val2 * 10) + parseInt(c);
                } else {
                    break;
                }
            }
            if ( c === ')' && val2 > 0 ) {
                //console.log(`mul(${val1},${val2})`);
                total = total + (val1 * val2);
            } else {
                inputFeed.unshift(c);
            }
        } else {
            inputFeed.unshift(c);
        }
    } else {
        val1 = 0;
        val2 = 0;
        reg = '';
    }
}

console.log(`Total: ${total}`);