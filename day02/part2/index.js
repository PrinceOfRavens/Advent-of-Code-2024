import {input} from './input.js';

let safeCount = 0;


input.forEach(line => {
    const data = line.split(' ').map(item => parseInt(item));

    let safe = false;

    for (let i = 0; i < data.length && !safe; i++) {
        const tempData = data.toSpliced(i, 1);

        const direction = tempData[1] - tempData[0];
        
        safe = true;

        for (let j = 1; j < tempData.length && safe; j++) {
            const diff = tempData[j] - tempData[j-1];
            if (direction > 0) {
                if (diff <= 0 || diff > 3) safe = false;
            } else if (direction < 0) {
                if (diff >= 0 || diff < -3) safe = false;
            } else {
                safe = false;
            }
        }
    }

    if (safe) {
        safeCount++;
        console.log(`SAFE: ${data.join(' ')}`);
    } else {
        console.log(`NOT SAFE: ${data.join(' ')}`);
    }
})


console.log(safeCount);