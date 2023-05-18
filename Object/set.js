const persone = new Set(['rohim', 'karim', 'kamal', 'jamal']);

// persone.forEach((value) => console.log(value));

let Iterators = persone.values();
let IteratorKey = persone.keys();

console.log(Iterators.next().value);
console.log(Iterators.next().value + " => " + IteratorKey.next().done);
console.log(typeof(persone));