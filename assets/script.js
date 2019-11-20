var displayName = document.querySelector("#displayname");
var displayTemp = document.querySelector("#temp");
var displayHumid = document.querySelector("#humid");
var displayWind = document.querySelector("#wnd");
var displayUv = document.querySelector("#uv");

var city = "New York"






function getCurrentCityWeather() {
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=7a7a18a0877364062aba3b94fdafdc1d"
//    Weather data//////////////////////////////////////////////////////////////////
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var temperature = [];
        var humidity = [];
        var windSpeed = [];
        var icon = [];
        var description = [];
        var lat = 0;
        var lon = 0;
        for (i = 0; i < 10; i++) {
            temperature.push(((response.list[i].main.temp - 273.15) * (9 / 5) + 32).toFixed(0))
            humidity.push(response.list[i].main.humidity);
            windSpeed.push(response.list[i].wind.speed);
            icon.push(response.list[i].weather[0].icon);
            description.push(response.list[i].weather[0].description);
        }
        lat = response.city.coord.lat;
        lon = response.city.coord.lon;
        console.log("wind " + windSpeed);
        console.log("humidity " + humidity);
        console.log("temperature " + temperature);
        console.log("icon " + icon);
        console.log("description " + description);
        console.log("lat " + lat)
        console.log("lon " + lon)

// UV data//////////////////////////////////////////////////////////////////
        var queryUV = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=7a7a18a0877364062aba3b94fdafdc1d&lat=" + lat + "&lon=" + lon + "&cnt=5"
        $.ajax({
            url: queryUV,
            method: "GET"
        }).then(function (response) {
            console.log(response);
    
    
        });
    


    })

   


   
   



}

getCurrentCityWeather()