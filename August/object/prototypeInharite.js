
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Crickter(type, run) {
    Person.call(this);
    this.type = type;
    this.run = run;
}

const Sakib = new Crickter('Sakib', 35, 'All-rounder', 5939);

console.log(Sakib);





