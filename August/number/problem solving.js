/*
In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.
Input Samples	Output Samples
12 1 5.30
                VALOR A PAGAR: R$ 15.50
16 2 5.10        

*/

// const lines = [
//     "12 1 5.30",
//     "16 2 5.10"
// ];

// let [proA, proB] = [lines.shift(),lines.shift()];

// let [proOne, proTwo] = [proA.split(" "), proB.split(" ")];

// let [unitsOneA, unitsOneB, unitsOneC] = [Number(proOne.shift()), Number(proOne.shift()), Number(proOne.shift())];

// let [unitsTwoA, unitsTwoB, unitsTwoC] = [Number(proTwo.shift()), Number(proTwo.shift()), Number(proTwo.shift())];


// console.log(`VALOR A PAGAR: R$ ${((unitsOneB * unitsOneC) + (unitsTwoB * unitsTwoC)).toFixed(2)}`);

// const lines = ['1523'];

// const [R, pi] = [Number(lines.shift()), 3.14159];

// let volume = ((4/3) * pi * Math.pow(R, 3)).toFixed(3);

// console.log("VOLUME = " + volume);



// const lines = '12.7 10.4 15.2';
// const pi = 3.14159;

// let [A, B, C] = lines.split(" ").map(Number);

// const triangulo = ((A*C)/2).toFixed(3);
// const circulo = (pi*Math.pow(C,2)).toFixed(3)
// const trapezio = (((A+B)/2)*C).toFixed(3);
// const quadrado = (Math.pow(B,2)).toFixed(3);
// const retangulo = (A*B).toFixed(3);


// console.log(`TRIANGULO: ${triangulo}`);
// console.log(`CIRCULO: ${circulo}`);
// console.log(`TRAPEZIO: ${trapezio}`);
// console.log(`QUADRADO: ${quadrado}`);
// console.log(`RETANGULO: ${retangulo}`);

// console.log(A, B, C);


// 1021

const lines = '91.01';
const N = lines.split(" ").map(Number);


function myFun(up, dowon) {
    let a = Math.floor(up / dowon);
    let b = up % dowon;
    let d = a/2;
    return [a,b, d];
}

console.log(myFun(N, 20));

// console.log("NOTAS:");

// let h = myFun(N, '100');
// console.log(h[0] + " nota(s) de R$ 100,00");
// let f = myFun(h[1], 50);
// console.log(f[0] + " nota(s) de R$ 50,00");
// let t = myFun(f[1], 20);
// console.log(t[0] + " nota(s) de R$ 20,00");
// let te = myFun(t[1], 10);
// console.log(te[0] + " nota(s) de R$ 10,00");
// let fi = myFun(te[1], 5);
// console.log(fi[0] + " nota(s) de R$ 5,00");
// let tw = myFun(fi[1], 2);
// console.log(tw[0] + " nota(s) de R$ 2,00");


// console.log("MOEDAS:");

// console.log(h[2] + " moeda(s) de R$ 1.00");
// console.log(f[2] + " moeda(s) de R$ 0.50");
// console.log(t[2] + " moeda(s) de R$ 0.25");
// console.log(te[2] + " moeda(s) de R$ 0.10");
// console.log(fi[2] + " moeda(s) de R$ 0.05");
// console.log(tw[2] + " moeda(s) de R$ 0.01");

