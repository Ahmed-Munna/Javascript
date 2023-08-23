// Object destructuring

let user = {
    name: 'Munna',
    id: 1030,
    // education: {
    //     degree: "BSC"
    // }
}


let { education: { degree: deg } = 0 } = user;
console.log(deg);

// Array destructuring

let arr = [2, 3, 4, [3,4,5,['amar']], 6, 7, 8];

let [,,,[,,a,[b]],,c] = arr;

console.log(a,b,c);






