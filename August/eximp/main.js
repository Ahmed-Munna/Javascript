
// import {pi, a} from './extarnal.js'
// import * as ex from './extarnal.js';
import extarnal, {myFunc as my} from "./extarnal.js";
console.log(my());

// let a = [3,4,5,4,5];

// let b = new Set(a);
// let c = [...b];
// let d = Array.from(b);

let a = new Set([1,2,3,4]);
let b = new Set([4,3,5,6]);

let union = new Set([...a, ...b]);
let intersection = new Set([...a].filter(x => { 
   return b.has(x);
}));

let diffrence = new Set([...a].filter(x => {
    return !b.has(x);
}))
console.log(diffrence);

