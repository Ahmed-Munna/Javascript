

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

// let javasc = {
//     name: 'Javascript',
//     libray: ['React', 'Angular', 'Vue'],
//     works: function () {
//         this.libray.forEach((value) => {
//             console.log(this.name);
//         });
//     }
// }

// javasc.works()


let a = [2,3,4,5,6,7,8];

let cv = a.find(function(currentValue, currentIndex, arr) {
    return currentValue > 4;
});

console.log(cv);





