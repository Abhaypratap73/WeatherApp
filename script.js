const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6a916c34fmsha60ed1521b902e7p170d5bjsn25f813e41b00',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getweather = (city) => {

	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getweather(city.value)
})


//By Default
getweather("Delhi");
