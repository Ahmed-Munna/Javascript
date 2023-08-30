

function Person(name, age) {
    this.name = name;
    this.age = age;    
}

function Crickter(name, age, type, country) {
    
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}


let myFun = new Crickter("Munna", 23, "all-rounder", "BD");

console.log(myFun.name)

