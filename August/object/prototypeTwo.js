
const personMethod = {
    eat() {
        return `${this.fullName} is Eating`;
    },
    sleep() {
        return `${this.fullName} is Sleeping`;
    }
}

function Person(fname, lname) {
    let person = Object.create(personMethod);
    person.fname = fname;
    person.lname = lname;
    person.fullName = fname + ' ' + lname;

    return person;
}

let Name = new Person('Ahmed', 'Munna');

console.log(Name.sleep());

const personMethods = {
    eat() {
        return `${this.fullName} is Eating`;
    },
    sleep() {
        return `${this.fullName} is Sleeping`;
    }
};

function Persons (fname,lname) {
    let person = Object.create(personMethods);
    person.fastName = fname;
    person.lastName = lname;
    person.fullName = fname + ' ' + lname;
    return person;
}

const Munna = Persons('Munna', 'Vau');

console.log(Munna.sleep());








