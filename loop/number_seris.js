//Siries-1 : 2 4 6 8 10 12 14 16....
var siries = "";

var a;

for(var i=1 ; i<10 ; i++ ){
    a=i*2;
    siries=siries + a + " ";

}

  console.log("Sisise-1 =>",siries);

//  Siries-2 : 1 4 7 10 13 16

 var siries = "1 ";

var a=1;

for(var i=1 ; i<10 ; i++ ){
    a=a+3;
    siries=siries + a + " ";

}

 console.log("Sisise-2 =>",siries);


 //  Siries-3 : 0 3 8 15 24 35 48.......


 var siries = " ";

 var a;
 
 for(var i=1 ; i<10 ; i++ ){
     a=(i*i)-1;
     siries=siries + a + " ";
 
 }
 
  console.log("Sisise-3 =>",siries);


  //  Siries-4 : 1 4 3 8 5 12 7 16........


//   var siries = " ";


//   for(var i=1 ; i<10 ; i++){
//       a=1;

//     if(i%2==0){
//         a=i*2;
//     }

//     siries = siries + a +" ";

//   }

//   console.log("Sisise-4 =>",siries);
  

//Siries-5 : 0 1 1 2 3 5 8 13......

siries = "0 1 ";

var n = 0 ;

var x = 0;
var y = 1;

for(var i=1 ; i<10 ; i++){
    n = x+y;
    x=y;
    y=n;

    siries=siries+n+" ";
}

console.log("Sisise-5 =>",siries);




var n = 144;

var range = Math.floor(Math.sqrt(n));

var devisor;

for(var i=1 ; i<=range ; i++){
    if(n%2==0){
        devisor+= i + " " +(n/i) + " ";
    }
}

console.log(devisor)

