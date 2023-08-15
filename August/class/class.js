
class std {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }
    myfunc() {
    
        return this.a + this.b;
   }
}

let st = new std('Helle', ' world');

console.log(st.myfunc());




