
function Person (fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.fullName = function () {
        return this.fname + ' ' + this.lname;
    }
}

const Munna = new Person('Ahmed', 'Munna', 20);
const Vau = new Person('Munna', 'Vau', 20);
Person.prototype.String = 20;

let x = 'hello';
String.prototype.concat = function () {
    return 'Hello World';
}
console.log(x.concat);











