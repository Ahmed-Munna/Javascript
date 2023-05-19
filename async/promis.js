const paymentSuccess = true;
const marks = 70;
const examMark = 80;

function enroll() {
    console.log('enrollment in progress');
    const promise = new Promise (function (resolve, reject) {
        setTimeout(function() {
            if(paymentSuccess) {
                resolve();
            } else {
                reject('your enrollment process is failed');
            }
        }, 1000);
    })
    return promise;
}
function progress() {
    console.log('your course in progress');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function() {
            if(marks >= 80) {
                resolve()
            } else {
                reject('your marks is too low');
            }
        }, 3000);
    });
    return promise;
}
function exam() {
    console.log('your exam is in process');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function() {
            if(examMark >= 80) {
                resolve();
            } else {
                reject('retake exam');
            }
        }, 2000);
    });
    return promise;
}
function certificate() {
    console.log('your certificate is in progress');
    const promise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve('Your got certificate');
        });
    });
    return promise;
}

enroll()
    .then(progress)
    .then(exam)
    .then(certificate)
    .then(function(value) {
            console.log(value);
    })
    .catch(function(err) {
        console.log(err);
    });