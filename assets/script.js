

var city = "New York"




getCurrentCityWeather()

function getCurrentCityWeather() {
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=7a7a18a0877364062aba3b94fdafdc1d"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var temperature = [];
        var humidity = [];
        var windSpeed = [];
        var lat =0
        var lon =0

        for (i = 0; i < 10; i++) {
            temperature.push(((response.list[i].main.temp - 273.15) * (9 / 5) + 32).toFixed(0))
            humidity.push(response.list[i].main.humidity);
            windSpeed.push(response.list[i].wind.speed);
        }
        lat= response.city.coord.lat;
        lon= response.city.coord.lon;

    });


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);


    });
    console.log("wind " + windSpeed);
    console.log("humidity " + humidity);
    console.log("temperature " + temperature);
}