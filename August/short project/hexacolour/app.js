const back = document.getElementById("back"),
      hexvalue = document.getElementById("hexValue"),
      btn = document.getElementById("btn");
let hexCode = [
    '0', '1', '2', '3', '4', '5',
    '6', '7', '8', '9', 'A', 'B', 
    'C', 'D', 'E', 'F'
] 
      
btn.onclick = function() {
    let letHex = ['0','0','0','0','0','0'];
    for(i = 0; i < 6; i++) {
        let m = Math.floor(Math.random() * 16);
        letHex[i] = hexCode[m];
    }
    letHex = letHex.join('');
    hexvalue.innerHTML = "#" + letHex;
    back.style.backgroundColor = "#" + letHex;
}