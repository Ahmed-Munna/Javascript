// let input = 'dd';
// let b = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

// let c = new Set(input);
// let f = new Set(b);

// let d = [...c].filter(x => { return f.has(x)});

// console.log((d[0])? 'The string contains a vowel.' : 'The string does not contain any vowel.');


var b = 50;
var fun = function() {
    var a = 30;
   function myFunc() {
    return a + b;
   }
   return myFunc;
};
console.dir(fun());



 
