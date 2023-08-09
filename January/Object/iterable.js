const num = [1,{
    name : 'BMW',
    model : '4-bMax'
},5,6,7,8];

let iterators = num[Symbol.iterator]();

console.log(iterators.next().value);


const car = iterators.next().value;

for(let a in car) {
    console.log(a + " = " + car[a]);
}


console.log(iterators.next().value);
console.log(iterators.next().value);
console.dir(num);