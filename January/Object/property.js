// const myObj = {
//     name : 'Marcitiz',
//     model : 'Bench-4',
//     year : 2022,
//     colour: {
//         color1 : 'White',
//         color2 : 'Black',
//         color3 : 'Blue'
//     } 
// }

// for (let c in myObj) {
//     console.log(myObj[c]);
//     for (let d in myObj.colour) {
//         console.log(myObj.colour[d]);
//     }
// }

function some(name, roll, subject) {
    this.name = name;
    this.roll = roll;
    this.subject = subject;
}

const std1 = new some('munna', '101030', 'BSc in CSE');

some.prototype.country = "Bangladesh";

for(let x in std1) {
    console.log(std1[x]);
}
