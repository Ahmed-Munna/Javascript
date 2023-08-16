

function Person (fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.fullname = function () {
        return this.fname + ' ' + lname;
    }
}

const Vau = new Person('Munna', 'Vau', 20);
const Munna = new Person('Ahmed', 'Munna', 20);
Vau.country = 'Bangladesh';

console.log(Munna.fullname());















