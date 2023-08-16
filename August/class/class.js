
class std {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }
    myfunc() {
    
        return this.a + this.b;
   }
}

// let st = new std('Helle', ' world');

// console.log(st.myfunc());


const a = ['Dhaka', 'Rajshahi', 'Rongpur', 'Barishalllllll'];

let len = a.length;

let ind = 0, dis = '', j = 0;

for (let i = 0; i < len; i++) {
    let b = a[i].length;
    if (b > ind) {
        ind = b;
        j = i;
        dis = a[i];
    }
}
console.log(ind, dis, j);


