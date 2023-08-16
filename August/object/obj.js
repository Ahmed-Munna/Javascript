

const A = {
    name: 'Munna',
    age : 20,
    B: {
        skill: 'kichu nai',
        hobby: 'Onek'
    }
}

// for (let x in A) {
//     console.log(A[x]);
//     for (let y in A.B) {
//         console.log(A.B[y]);
//     }
// }


// let str = JSON.stringify(A);
let str = Object.values(A);

console.log(str);










