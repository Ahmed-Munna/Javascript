const time = document.getElementById("main-time");
(function() {
    
    setInterval(() => {
        let currentTime = new Date(),
        hour = currentTime.getHours(),
        minite = currentTime.getMinutes(),
        sec = currentTime.getSeconds(),
        day = currentTime.getDay();

        time.innerHTML = ((hour > 12)? hour - 12 : hour) + ":" + minite;
        time.nextElementSibling.innerHTML = sec;

    },1000)
})()










