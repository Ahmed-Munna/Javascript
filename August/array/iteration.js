
let a = [1,2,3,4,5,6];
let b = ['ING', 'SL', 'AFG', 'BAN', 'NEZ', 'AUS', 'SA', 'ZIM'];

// a.forEach((value, index, arr) => {
//     console.log(value);
//     console.log(index);
//     console.log(arr);
//     console.log('_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _');
// });

let x = a.filter((value, index, arr) => {
    return value > 30;
});

let y = b.reduce((total, value, index, arr) => {
    return  value;
});

let z = a.map((value, index, arr) => {
    return value + 2;
});


// let da = Math.floor(Math.random() * 6);

let dd = Math.max.apply(null, a);

const vowels = ['a', 'e', 'i', 'o', 'u'];
let sentenses = 'hello brothers';
let counter = 0;
for (let i = 0; i < sentenses.length; i++) {
    for(let j = 0; j < vowels.length; j++) {
        if(vowels[j] == sentenses[i]) {
            counter++;
        }
    }
}

console.log(counter);








