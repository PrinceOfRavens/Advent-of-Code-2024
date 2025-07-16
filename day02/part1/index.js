import {input} from './input.js';

let safeCount = 0;


input.forEach(line => {
    const data = line.split(' ').map(item => parseInt(item));

    const direction = data[1] - data[0];

    let safe = true;

    for (let i = 1; i < data.length; i++) {
        const diff = data[i] - data[i-1];
        if (direction > 0) {
            if (diff <= 0 || diff > 3) safe = false;
        } else if (direction < 0) {
            if (diff >= 0 || diff < -3) safe = false;
        } else {
            safe = false;
        }

        if (!safe) break;
    }

    if (safe) safeCount++;
})


console.log(safeCount);