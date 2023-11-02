


const hasMeeting = false;

const  meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Zoom',
            time: '10:00 PM',
        }

        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting Error"));
    }
});

const addToCalender = (meetingDetails) => {
    return new Promise((res) => {
        const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        res(calender);
    });
}

meeting
    .then(addToCalender)
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) => {
        console.log(reject.message);
    }) 


