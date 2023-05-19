// hoisting

/*
some();

function some() {
    console.log('hello world');
}

function stdName(fname, lname) {
    console.log(this.fname = fname);
    console.log(this.lname = lname);
}

stdName('munna', 'vau');
*/

const person = {
    identify : function (country, state) {
       return this.fname + ' ' + this.lname + ` is leaving in ${country} at ${state}`;
    }
};

const person1 = {
    fname : 'Ahmed',
    lname : 'Munna'
}

let result = person.identify.call(person1, 'Bangladesh', 'Dhaka');

console.log(result);
