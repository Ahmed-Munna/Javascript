const paymentSuccess = true;
const marks = 70;
const examMark = 99;

function enroll(callback) {
    console.log('course enrolment is prossesing');
    setTimeout(function() {
        if(paymentSuccess) {
            callback();
        } else {
            console.log('payment failed');
        }
    }, 2000);
}

function progress(callback) {
    console.log('course is progressing');
    setTimeout(function() {
        if(marks >= 70) {
            callback();
        } else {
            console.log('Your marks is too low..!');
        }
    }, 3000);
}

function exam(callback) {
    console.log('Your exam is processing');
    setTimeout(function() {
        if(examMark >= 80) {
            callback();
        }
    }, 4000);
}

function certificate() {
    console.log('certificate is processing');
    setTimeout(function() {
        console.log('congratulaition....');
    }, 1000);
}

enroll(function() {
    progress(function() {
        exam(certificate);
    });
});

