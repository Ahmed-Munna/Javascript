
const payment = true;
const marks = 20;

function enroll() {
    console.log("Enrollment is in progress...");

    const promis = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (payment) {
                console.log("Payment Successfull");
                resolve();
            } else {

                reject("Payment Failed");
            }
        },2000);
    });

    return promis;
}

function progress() {
    console.log("Course is in progress...");

    const promis = new Promise(function(resolve,reject) {
        setTimeout(function() {
            if (marks >= 70) {
                console.log("Course is compleate");
                resolve();
            } else {
                
                reject("You could not get enough marks");
            }
        },3000);
    });
    return promis;
}

function getCirtificate() {
    console.log("You Cirtificate is in progress");

    const promis = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Congratulaition...");
        },1000);
    });

    return promis;
}

async function courses() {
   try {
        await enroll();
        await progress();
        let getCir = await getCirtificate();

        console.log(getCir);
   } catch(err) {
        console.log(err);
   }
}

courses();



