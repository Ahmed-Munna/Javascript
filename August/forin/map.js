"use strict";

let x = new Map([
    ['name', 'bangladesh'],
    [2, 'some'],
    [{name: 'Helo'}, 'anything'],
]);
x.set('batch', 60);
// x.delete(2);

// x.forEach((element,key) => {
//     console.log(element);
// });
// console.log(x.get(2));

// for (let y of x.entries()) {
//     console.log(y.toString());
// }


const person = {
    fname: 'Ahmed',
    lname: 'Munna',
    ages: () => {
        return this.age;
    }
}
const personAge = {
    age: "34",
}

let per = person.ages.call(personAge);

console.log(per);