console.clear()

const marks = [10, 2, 8, 4, 6];

let suma = 0;
let index = 0;

suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];
suma += marks[index++];


console.log('Vidurkes;', suma / marks.length);


let suma1 = 0;
let index1 = -1;
suma1 += marks[++index1];
suma1 += marks[++index1];
suma1 += marks[++index1];
suma1 += marks[++index1];
suma1 += marks[++index1];

console.log('Vidurkes;', suma1 / marks.length);

console.log('-------------');

// Isspauinti nuo 0 iki 5.
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
console.log('-----------------');
const pozymiai = [2, 4, 6, 8, 10];

let sum = 0;

for (let i = 0; i < pozymiai.length; i++) {
    console.log(i, '-->', pozymiai [i]);
}
console.log('--------------');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i < numbers.length; i +=2) {
    console.log(numbers [i]);
}
console.log('--------------');

const abc = 'qwerty';

for (let i = 0; i < abc.length; i++) {
    console.log(abc[i]);
    
}
console.log('--------------');
const students = ['P', 'M', 'J', 'O'];

//Sveiki, mano vardas yra [vardas]!

for (let i = 0; i < students.length; i++) {
    const name = students[i];
    const hi = `Sveiki, mano vardas yra ${name}!`;
    console.log(hi);
}