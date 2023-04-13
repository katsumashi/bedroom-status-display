const weatherurl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true"

function clock() {
    var datetime = new Date();
    var hours = datetime.getHours();
    var ampm = "";
    if (datetime.getHours() >= 13) { hours -= 12; ampm = "pm"; } else { ampm = "am"; }
    var minutes = datetime.getMinutes()
    if (datetime.getMinutes() <= 9) { minutes = "0" + minutes; }
    var seconds = datetime.getSeconds() 
    if (datetime.getSeconds() <= 9) { seconds = "0" + seconds; }

    var currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    dateTimeElement = document.getElementById('date-time').innerHTML=currentTime;

    clearTimeout();
    setTimeout(clock, 1000);
}

function weatherget() {
    fetch(weatherurl)
    .then(weatherres => weatherres.json())
    .then(out => {
        console.log(JSON.stringify(out))
        var weatherdisplay = out.current_weather.temperature + "°C";
        weatherelement = document.getElementById("weatherCanberra").innerHTML=weatherdisplay;
    })
    .catch(err => { throw err });
    
    clearTimeout();
    setTimeout(clock, 10000);
}

clock();
weatherget();