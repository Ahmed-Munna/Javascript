// let a = function() {
//     let b = "not"
// }

// a.BD = "bangladesh";

// console.dir(a);


// let a = {
//     name: "munna",
//     age: 23
// }

// let b = {
//     fname: "SHA",
//     age: 22
// }

// Object.setPrototypeOf(b,a);


// console.log(b.name)


function Person(name, age) {
    this.name = name;
    this.age = age;    
}

Person.prototype.eat = function() {
    return this.name + " is Eating";
} 

function Crickter(name, age, type, country) {
    
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}
Crickter.prototype.eat = Object.create(Person.prototype.eat);
// Crickter.prototype.constructor = Crickter;
let Cri = new Crickter("Munna", 23, "all-rounder", "BD");

let per = new Person("Ahmed", 33);
console.log(Cri.eat);



