// const lines = prompt();
// const line = prompt();

// let A = lines[0];
// let B = line[0];

// let SOMA = Number(A + B);
// console.log(`SOMA = ${SOMA}`);


let x = ['bd', 'eng', 'aus', 'nez', 'sa'];
let y = [24,5,12,6,18,9,100,31,72];

// let sor = x.sort();
// let ysor = y.sort().reverse();
let sor = y.sort((a,b) => {return a - b;});
let mx = Math.max.apply(null, y)
let mn = Math.min.apply(null, y)
console.log(mn);








