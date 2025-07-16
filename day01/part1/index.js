import {input} from './input.js';

//console.log(input.length);

const list1 = [];
const list2 = [];

input.forEach(line => {
    list1.push(line[0]);
    list2.push(line[1]);
});

//console.log(list1.length);
//console.log(list2.length);

list1.sort();
list2.sort();

//console.log(list1);
//console.log(list2);

const answer = list1.map((item, i) => Math.abs(list1[i] - list2[i])).reduce((prev, curr) => prev + curr, 0);

console.log(answer);