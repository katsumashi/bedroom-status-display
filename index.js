function clock() {
    var datetime = new Date();
    var currentTime = datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds();
    document.getElementById('date-time').innerHTML=currentTime;

    setInterval(clock, 1000);
}

clock();