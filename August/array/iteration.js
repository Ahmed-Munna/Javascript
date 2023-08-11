
let a = [93,99,100,18,38,13,41,12,34,92];
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

console.log(y);








