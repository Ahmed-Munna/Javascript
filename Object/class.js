class Car{
    constructor(name, model, colour, year) {
        this.name = name;
        this.model = model;
        this.colour = colour;
        this.year = year; 
    }
}

const myCar = new Car("BMW", "3-Bench", "White", 2021);

console.log("Car Name: " + myCar.name);
console.log("Car Model: " + myCar.model);
console.log("Car Colout: " + myCar.colour);
console.log("Car Year: " + myCar.year);

let funName = function name() { console.log('hae-ten')}

console.log(typeof(funName));

delete myCar.colour;

for (let a in myCar) {
    console.log(myCar[a]);
}