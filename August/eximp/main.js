
// import {pi, a} from './extarnal.js'
// import * as ex from './extarnal.js';
import extarnal, {myFunc as my} from "./extarnal.js";
console.log(my());

let a = [3,4,5,4,5];

let b = new Set(a);
let c = [...b];
let d = Array.from(b);
console.log(d);

