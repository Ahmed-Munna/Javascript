// for(let i = 0; i < 4 ; i++) {
//     for(var j = 0; j < 4; j++) {
//         console.log("*");
//     }
// }


function myFunc(arr, fun) {
    const newArray = [];
    
    for(let i = 0; i < arr.length; i++) {
        newArray.push(fun(arr[i]));
    }
    return newArray;
}

const a = ["Munna", "Emu"];

let printArr = myFunc(a,function(language) {
    return language.length;
})

console.log(printArr);