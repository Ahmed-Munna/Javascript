

// let a = [2,3,4,5];

// function numb(n) {
//     n[2] = 40

//     return n;
// }

// console.log(numb(a))
// console.log(a)



// function clickMe(id) {
//     console.log(id);
// }


// let a = [3,4,6,7];

// let b = Math.max.apply(null,a);

// console.log(b);

function add() {
    let counter = 0;

    return function () {
        counter += 1;
    };
}
let adding = add();
adding();
adding();
adding();
adding();
console.dir(adding)



