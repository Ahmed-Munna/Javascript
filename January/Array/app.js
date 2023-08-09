// var someArr = ["Munna","Laboni","Shahabuddin","shahinur"];

// someArr.push("Emu");

// someArr.unshift("Emu");

// console.log(someArr.pop());

// console.log(someArr.shift());

// console.log(someArr);


// var male = ["sakil","Biswash","BR-Emu","Munna"];

// var female = ["nabila","Single"];

// var lastIndex = male.pop();
//  female.push(lastIndex);

// console.log(male,female);


// var male = ["sakil","Biswash","BR-Emu","Munna"];

// var female = ["nabila","Single"];

// var lastIndex = male[2];
//  female.push(lastIndex);

//  delete(male[2]);
// console.log(male,female);

// var male = ["sakil","Biswash","BR-Emu","Munna"];

// var female = ["nabila","Single"];

//  male.slice(2,1);

// console.log(male,female);


 

// var arr = ["A","B","C","D","E","F","G"];

// var ary = arr.slice(0,3);

// console.log(ary);



// var arr = ["A","B","C","D","E","F","G"];

// var ary = arr.slice(-5,-2);

// console.log(ary);


    // var arr = ["A","B","C","D","E","F","G"];

    // var ary = arr.splice(1,2);

    // console.log(arr,ary);


    // var arr = ["A","B","C","D","E","F","G"];

    // var ary = arr.splice(-3,2);

    // console.log(arr,ary);


//_________________WRONG WAY ARRAY COPY___________________


// var arr = ["A","B","C","D","E","F","G"];

// var ary =arr;

// ary[2]="cammilCase";

// console.log(arr,ary);



//____________RULSE ARRAY COPY_____________________


// var arr = ["A","B","C","D","E","F","G"];

// var ary =arr.slice();

// ary[2]="cammilCase";

// console.log(arr,ary);

// var arr1 = ["A","B","C"]
// var arr2=["D","E"];
// var arr3=["F","G"];

// var list = arr1.concat(arr2).concat(arr3);

// console.log(list);


// var arr = ["A","B","C","D","E","F","G"];

// var length = arr.length;

// for(i=0;i<length; i++){
//     console.log(i,arr[i]);
// }


// var arr = ["A","B","C","D","E","F","G"];


// for(i in arr){
//     console.log(i,arr[i]);
// }


// var arr = ["A",null,"B","C","D","E",undefined,"F","G"];

// var ary = arr.filter(Boolean);

// console.log(ary);



//________convart array to string and string to array_____________


// var str = "I am Munna";

// var st = str.split(" ");

// console.log(st);


// var s = st.join(" ");


// console.log(s);

// var str = "I am Munna";

// var s = str.split(" ").reverse();

// console.log(s);



var str = "I love my Bangladesh, We are independent human";

var sr = str.split("");

console.log(sr.length)


var str = "I love my Bangladesh, We are independent human";

var sr = str.split("a");

console.log(sr.length-1)




