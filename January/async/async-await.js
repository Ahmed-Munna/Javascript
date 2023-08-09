const paymentSuccess = true;
const marks = 80;
const examMark = 80;

function enroll() {
    console.log('course enrollment in progress');
    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(paymentSuccess) {
                resolve();
            } else {
                reject('your payment failed..!');
            }
        }, 2000);
    });
    return promise;
}
function progress() {
    console.log('course in progressing');
    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(marks >= 80) {
                resolve();
            } else {
                reject('your marks is too low..');
            }
        }, 3000);
    });
    return promise;
}
function exam() {
    console.log('your exam is running');
    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(examMark >= 80) {
                resolve();
            } else {
                reject('your exam marks is too low');
            }
        }, 2000);
    });
    return promise;
}
function certificate() {
    console.log('your certificate is processing');
    const promise = new Promise(function(resolve) {
        setTimeout(function() {
            console.log('your got certificate');
        },1000);
    });
    return promise;
}

async function course() {
    try {
        await enroll();
        await progress();
        await exam();
        const message = await certificate();
        console.log(message);
    } catch(err) {
        console.log(err);
    }
}
course();