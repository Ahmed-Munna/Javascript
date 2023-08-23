let b = 50;
let fun = function() {
    let a = 30;
   function myFunc() {
    return a + b;
   }
   return myFunc;
};
console.dir(fun());



