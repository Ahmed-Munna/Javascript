function myFun() {
    const msg = document.getElementById('msg');
    msg.innerHTML = "";
    let inp = document.getElementById('demo').value;

    try{
        if(inp == "") throw "input is empty";
        if(isNaN(inp)) throw "input not number";
    }catch(err) {
        msg.innerHTML = err;
    }
}