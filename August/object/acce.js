
const person = {
    fname: 'Ahmed ',
    lname: 'Munna',
    age: 20,
    lang: 'en',
    // fullName: function () {
    //     return this.fname + this.lname;
    // }
    get fullName() {
        return this.fname + this.lname + ', language: ' + this.lang;
    },
    set setLan(lan) {
        this.lang = lan;
    } 
}

person.setLan = 'Ban';

console.log(person.fullName);

















