
let payment = true;
let marks = 90;

function enroll() {
    console.log("Enrollment in progress...");

    const promis = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (payment) {

                resolve([38,4,3,45,1,49]);
            } else {
                
                reject ("Payment Failed");
            }
        },2000);
    });

    return promis;
}

function progress() {
    console.log("Course in progress..");

    const promis = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (marks >= 70) {

                resolve("Course is Compleate");
            } else {
                
                reject("You could not get Cirtificate");
            }
        },3000);
    });

    return promis;
}

function getCirtificate() {
    console.log("Cirtificate is in progress");

    const promis = new Promise(function(resolve) {
        setTimeout(function() {
            
            resolve("Congratulaition you got cirtificate");
        },1000);
    });

    return promis;
}

enroll().then(function(value) {
            console.log(value);
            progress();
        })
        .then(getCirtificate)
        .then(function(value) {
            console.log(value);
        })
        .catch(function(value) {
            console.log(value);
        });



