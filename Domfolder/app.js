// document.getElementById("fastCard").style.textTransform = 'upercase';

// document.getElementById("fastTaskbar").style.textTransform = "uppercase";


// let fastTaskbar = document.getElementById("fastTaskbar");


// fastTaskbar.textContent="All Task Content";
// fastTaskbar.innerHTML = "<h5>ADD TASKS</h5>";
// fastTaskbar.innerText = "ADD NEW TASKS";

// document.querySelector("li").textContent="Fast task";

// document.getElementById("fastTaskbar").style.background ="#555";
// document.getElementById("fastTaskbar").innerHTML = "<h5>ADD NEW  TASK</h5>";
// document.getElementById("fastTaskbar").textContent = "ADD NEW TASK";
// document.getElementById("fastTaskbar").innerText = "ADD NEW TASK";


// document.querySelector("li").innerText = "Component - 1";

/* CLASS NAME IN JS DOM */

// let docuMent = document.getElementsByClassName("collection-item");

// docuMent[1].style.background = "black";

// document.getElementsByTagName("li")[0].style.color="red";


/* CLASS NAME IN JS DOM */





/* ALL SELECT & FOR EACH LOOP IN JS DOM */


// let looping= document.querySelectorAll("ul li");

// console.log(looping)

// looping.forEach(function(looping){

//     looping.style.background="#555";
//     looping.style.color="#fff";
//     looping.innerHTML = "<h3>content</h3>";

// })


// let lopping= document.querySelectorAll("ul li");

// lopping.forEach(function(lopping){
//     lopping.style.color = "red"
// })

// let lopping = document.querySelectorAll("li");

// lopping.forEach(function(lopping){
//     lopping.innerText = "Content";
//     lopping.style.background = "#777";
// })


// let lopping = document.querySelectorAll("li");

// lopping.forEach(function(lopping){
//     lopping.style.background = "#555";
//     lopping.style.color ="white";
//     lopping.innerText="Component";
// })

/* ALL SELECT & FOR EACH LOOP IN JS DOM */





/* TRAVARSING IN JS DOM */




// let val;

//   let  list = document.querySelector("ul");

//     val=list.children[0].style.color ="red";



// console.log(val);


// let val;

// let selactor = document.querySelector("li");

// val = selactor.parentElement.parentElement.style.background = "#999";
// val = selactor.parentElement.parentElement.style.padding = "20px";


// console.log(val);


// let vall;

// let list = document.querySelector("ul");

// vall = list.children[2].style.color= "blue";

// console.log(vall);


// let vall;

// let list = document.querySelector("li");

// vall = list.parentElement.parentElement.style.background = "#999";

// console.log(vall)



/* TRAVARSING IN JS DOM */



/* CREATE ELEMENT IN JAVASCRIPT DOM */



    // let list = document.createElement("li");


    // list.className = "collection-item";

    // list.id = "another";

    // list.setAttribute("title", "new-item");

    // list.innerText = "Condition"



    // console.log(list);





    // let list = document.createElement("li");


    // list.className = "Whatevet";

    // list.id = "Id_Name";

    // list.setAttribute("title","new")

    // list.innerText = "Condition"


    // console.log(list)




    // let list = document.createElement("li");

    // list.className = "collection-item";

    // list.innerText = "New item";

    // document.querySelector("ul").appendChild(list);

    // console.log(list);


    // let val = document.createElement("a");

    // val.setAttribute("href","#")

    // val.className = "secondary-content";

    // val.innerHTML = "<i>*</i>"

    // list.appendChild(val);


    // console.log(val);




    // let list = document.createElement("li");

    // list.className = "collection-item";

    // list.innerText = "New Item";

    // document.querySelector("ul").appendChild(list);

    // console.log(list);



    // let val = document.createElement("a");

    // val.setAttribute("href","#");

    // val.className = "secondary-content";
    
    // val.innerHTML = "<i>*</i>";

    // list.appendChild(val)


    // let list = document.createElement("li");

    // list.className = "collection-item";

    // list.innerText = "New Content-5"

    // document.querySelector("ul").appendChild(list)

    // console.log(list);


    // let val = document.createElement("a");

    // val.className = "secondary-content";

    // val.innerHTML = "<i>*</i>";


    // list.appendChild(val);




/* CREATE ELEMENT IN JAVASCRIPT DOM */



/* REMOVE ITEM IN JAVASCRIPT DOM */

        // let condition = document.querySelectorAll("li");

        // condition[1].remove();

        // let condition = document.querySelectorAll("li");

        // let unOrderList = document.querySelector("ul");

        // unOrderList.removeChild(condition[0]);


            // let condition = document.querySelectorAll("li");

            // condition[4].remove();


            // let condition = document.querySelectorAll("li");

            // let anotherList = document.querySelector("ul");

            // anotherList.removeChild(condition[2]);


            // let condition = document.querySelectorAll("li");

            // condition[2].remove();


            // let condition = document.querySelectorAll("li");

            // let therList = document.querySelector|("ul");

            // therList.removeChild(condition[2]);

/* REMOVE ITEM IN JAVASCRIPT DOM */





/* ADD EVENT LESENER IN JAVASCRIPT DOM*/




//  document.querySelector(".black-effect").addEventListener("click" , function(){

//     console.log("I love Javascript");

//  });


// document.querySelector(".black-effect").addEventListener("click" , onclick);

// function onclick(e){
//     let rel;
    
//     rel = e;

//     rel = e.target.innerText = "Delete task";


//     console.log(rel)
// }





// document.querySelector(".black-effect").addEventListener("click" , onclick);

// function onclick(e){
//     let onc;

//     onc = e;

//     onc = e.innerText = "Bangladesh";

//     console.log(onc)
// }



// document.querySelector(".black-effect").addEventListener("click", function(){
//     console.log("I love Javascript")
// })


/* ADD EVENT LESENER IN JAVASCRIPT DOM*/



/* MOUSE EVENT IN JAVASCRIPT DOM */



// const  lawra = document.querySelector(".black-effect");

// lawra.addEventListener("mouseleave" , runEvent)

// function runEvent(e){
//     console.log(`Event type = ${e.type}`)
// }



// const luta = document.querySelector(".black-effect");

// luta.addEventListener("click" , adEvent);

// function adEvent(e){
//     console.log(`Event type = ${e.type}`)
// }

// const adNew = document.querySelector(".black-effect");

// adNew.addEventListener("click", onclick);

// function onclick(e){
//     console.log(`Event type = ${e.type}`)
// }



/* MOUSE EVENT IN JAVASCRIPT DOM */











let var1 = document.querySelector(".waves-effect");

let var2 = document.querySelector("#autocomplete-input")

var1.addEventListener("click" , runEvent);

function runEvent(e){
    console.log(`Event type: ${e.type}`);

    var3=var2.value

    console.log(var3)
    e.preventDefault();

    
let list = document.querySelector("li");

list.innerText=var3

    
}














































































