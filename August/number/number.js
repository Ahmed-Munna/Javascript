

// let a = 34e4;
// let b = 0.2 + 0.1;

// let a = 'whatever';

// let b = 3, c = 4;

// let d = a + b * c;

// let a = -2;
// let b = 1;
// let d = a + b;

// console.log(`d = ${d}`);

// let R = 10.33;
// let n = 3.14159;

// let A = n * (R * R);

// console.log(`A=${A}`);

// let a = 5553.45658;

// let b = a.toString();
// let c = a.toExponential(2);
// let d = a.toFixed(5);
// let p = a.toPrecision(2);

// let num = "389";
// let n = Number(num);

// let partI = "30.3";
// let i = parseInt(partI);
// let f = parseFloat(d);
// console.log(f);


let lines = ['sha','500', '1230.30']
// let NUMBER = lines.shift();
// let B = parseFloat(lines.shift());
// let C = parseFloat(lines.shift());
// console.log(Number,B,C);
// let SALARY = B * C;

// console.log(`NUMBER = ${NUMBER}`);
// console.log(`SALARY = U$ ${SALARY.toFixed(2)}`);

let Name = lines.shift();
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let Total = (0.15 * C) + B;

console.log(`TOTAL = R$ ${Total.toFixed(2)}`);

// let PI = 3.14159;

// const R = Number(lines.shift());

// console.log(`A=${(PI * R * R).toFixed(4)}`);







