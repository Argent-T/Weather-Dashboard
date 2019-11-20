var displayName = document.querySelector("#displayname");
var displayTemp = document.querySelector("#temp");
var displayHumid = document.querySelector("#humid");
var displayWind = document.querySelector("#wnd");
var displayUv = document.querySelector("#uv");
var forecastDate = document.querySelectorAll(".card-title");
var forecastTemp = document.querySelectorAll(".tempforecast");
var forecastHumid = document.querySelectorAll(".humidforecast");
var forecastIcon = document.querySelectorAll(".forecastIcon");

var city = "New York";



function getforecastWeather() {
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
        var date = [];
        var lat = 0;
        var lon = 0;
        for (i = 0; i < 39; i++) {
            temperature.push(((response.list[i].main.temp - 273.15) * (9 / 5) + 32).toFixed(0))
            humidity.push(response.list[i].main.humidity);
            windSpeed.push(response.list[i].wind.speed);
            icon.push(response.list[i].weather[0].icon);
            description.push(response.list[i].weather[0].description);
            date.push(response.list[i].dt_txt);
        }
        lat = response.city.coord.lat;
        lon = response.city.coord.lon;

        // Today's weather////////////////////////////////////////////////////////

        // console.log("wind " + windSpeed);
        // console.log("humidity " + humidity);
        // console.log("temperature " + temperature);
        // console.log("icon " + icon);
        // console.log("description " + description);
        // console.log("lat " + lat)
        // console.log("lon " + lon)

        // Forecast//////////////////////////////////////////////////////////////
        forecast()
        function forecast() {

            var j = 0
            for (i = 0; i < forecastDate.length; i++) {

                forecastDate[i].innerHTML = date[j].substring(0, 10)
                forecastTemp[i].innerHTML = "Temp: " + temperature[j] + "&#8457";
                forecastHumid[i].innerHTML = "Humidity: " + humidity[j] + "%";
                forecastIcon[i].src = "http://openweathermap.org/img/wn/" + icon[j] + ".png"
                j = j + 8

            };


        }

        // UV data//////////////////////////////////////////////////////////////////
        var queryUV = "http://api.openweathermap.org/data/2.5/uvi?appid=7a7a18a0877364062aba3b94fdafdc1d&lat=" + lat + "&lon=" + lon + "&cnt=5"
        $.ajax({
            url: queryUV,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            displayUv.textContent = ("UV Index: " + response.value);

        });

    })



}

getforecastWeather()

getCurrentWeather()
function getCurrentWeather() {
    var currentURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=7a7a18a0877364062aba3b94fdafdc1d"

    $.ajax({
        url: currentURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        displayName.innerHTML = city + " - " + moment().format('MMM Do YYYY, h:mm a') + " <img src ='http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png'>"
        displayTemp.innerHTML = "Temperature: " + (((response.main.temp - 273.15) * (9 / 5) + 32).toFixed(0)) + "&#8457";
        displayHumid.innerHTML = "Humidity: " + response.main.humidity + "%";
        displayWind.innerHTML = "Wind Speed: " + response.wind.speed + " MPH";



    })
}

