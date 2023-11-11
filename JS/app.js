let city_btn = document.getElementById('city_btn');
let output_city_name = document.getElementById('output_city_name');
let weather_result = document.getElementById('weather_result');

let myAPIkey = '99f08c15565c430cb21af09601ac74b8';

city_btn.addEventListener('click', async () => {
    let city_name = document.getElementById('city_input_field').value;

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${myAPIkey}`);

    let myData = await response.json();

    weather_result.innerHTML =
        'Date: '+ new Date().toJSON().slice(0, 10) + `<br>`+
        'Time: '+ new Date().getHours() +':'+ new Date().getMinutes()+':'+ new Date().getSeconds() + `<br>`+
        'City Name: ' + myData.name + `<br>` +
        'Sky: ' + myData.weather['0'].main + `<br>` +
        'Description: ' + myData.weather['0'].description + `<br>` +
        'Country Name: ' + myData.sys.country + `<br>` +
        'Pressure: ' + myData.main.pressure + ' hPa' +`<br>` +
        'Latitude: ' + myData.coord.lat + `<br>` +
        'Longitude: ' + myData.coord.lon + `<br>` +
        'Humidity: ' + myData.main.humidity + ' %' + `<br>` +
        'Wind Speed: ' + myData.wind.speed + ' m/s'+ `<br>` +
        'Maximum Temperature: ' + parseFloat(myData.main.temp_max - 273.15).toFixed(2) + '°C' + `<br>` +
        'Minimun Temperature: ' + parseFloat(myData.main.temp_min - 273.15).toFixed(2) + '°C' + `<br>` +
        'Temperature: ' + parseFloat(myData.main.temp- 273.15).toFixed(2)+ '°C'
        ;

    if (myData.weather['0'].main == 'Haze' || myData.weather['0'].main == 'Mist' || myData.weather['0'].main == 'Smoke') {
        const city_weather = document.getElementById('city_weather');
        city_weather.style = "background-image: linear-gradient(to right, rgba(0,0,0,0.2),rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('../images/haze.jpg');";
        city_weather.style.backgroundSize = "cover";
        city_weather.style.backgroundRepeat = "no-repeat;";
        city_weather.style.backgroundPosition = "center;";

    }
    if (myData.weather['0'].main == 'Clouds') {
        const city_weather = document.getElementById('city_weather');
        city_weather.style = "background-image: linear-gradient(to right, rgba(0,0,0,0.2),rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('../images/light_cloud.jpg');";
        city_weather.style.backgroundSize = "cover";
        city_weather.style.backgroundRepeat = "no-repeat;";
        city_weather.style.backgroundPosition = "center;";
    }
    if (myData.weather['0'].main == 'Rain') {
        const city_weather = document.getElementById('city_weather');
        city_weather.style = "background-image: linear-gradient(to right, rgba(0,0,0,0.2),rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('../images/rain.jpg');";
        city_weather.style.backgroundSize = "cover";
        city_weather.style.backgroundRepeat = "no-repeat;";
        city_weather.style.backgroundPosition = "center;";
    }

})

