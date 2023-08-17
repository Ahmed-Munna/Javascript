class Player{

    constructor (fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.fullName = fname + ' ' + this.lname;
    }
    sleep() {
        return this.fullName + ' is sleeping';
    }
    eat() {
        return this.fullName = ' is eating';
    }
}

const Play = new Player('Ahmed', 'Munna');

console.log(Play.sleep());











