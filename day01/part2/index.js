import {input} from './input.js';

const list1 = [];
const list2 = [];

input.forEach(line => {
    list1.push(line[0]);
    list2.push(line[1]);
});

const counts = {};

list2.forEach(item => {
    counts[item] = (counts[item] || 0) + 1;
})

//console.log(counts);

let answer = 0;

list1.forEach(item => {
    answer = answer + (item * (counts[item] || 0));
})

console.log(answer);