

var city = "New York"




getCurrentCityWeather()

function getCurrentCityWeather() {
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=7a7a18a0877364062aba3b94fdafdc1d"
    var queryUV = "http://api.openweathermap.org/data/2.5/uvi?appid=7a7a18a0877364062aba3b94fdafdc1d&lat=" + lat + "&lon=" + lon + "cnt=5"

    var lat = 0;
    var lon = 0;
   
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


        for (i = 0; i < 10; i++) {
            temperature.push(((response.list[i].main.temp - 273.15) * (9 / 5) + 32).toFixed(0))
            humidity.push(response.list[i].main.humidity);
            windSpeed.push(response.list[i].wind.speed);
            icon.push(response.list[i].weather[0].icon);
            description.push(response.list[i].weather[0].description);
        }
        bob=1;
        lat = response.city.coord.lat;
        lon = response.city.coord.lon;
        console.log("wind " + windSpeed);
        console.log("humidity " + humidity);
        console.log("temperature " + temperature);
        console.log("icon " + icon);
        console.log("description " + description);
        console.log("lat " + lat)
        console.log("lon " + lon)
        


    }).then(

        $.ajax({
            url: queryUV,
            method: "GET"
        }).then(function (response) {
            console.log(response);


        })

    );





}