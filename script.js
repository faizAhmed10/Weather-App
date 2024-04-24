const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c5306512famsh0fc65a5e197c55dp1669dbjsnf044e2b6187f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const search = async () => {
	let city = document.getElementById('city')
	let inp = document.getElementById('inp')
	let inpVal = inp.value
	city = inpVal

	let humidity = document.getElementById('humidity')
	let sunrise = document.getElementById('sunrise')
	let sunset = document.getElementById('sunset')
	let temp = document.getElementById('temp')
	let min_temp = document.getElementById('min-temp')
	let max_temp = document.getElementById('max-temp')
	let cloud_pct = document.getElementById('cloud_pct')
	let wind_deg = document.getElementById('wind_deg')
	let wind_speed = document.getElementById('wind_speed')

	console.log(inpVal)

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then((res) => { return res.json() })
		.then((data) => {
			console.log(data)
			humidity.innerHTML = "Humidity: " + data.humidity
			sunrise.innerHTML = "Sunrise: " + data.sunrise
			sunset.innerHTML = "Sunset: " + data.sunset
			temp.innerHTML = "Temperature: " + data.temp
			min_temp.innerHTML = "Min-temperature: " + data.min_temp
			max_temp.innerHTML = "Max-temperature: " + data.max_temp
			cloud_pct.innerHTML = "Cloud PCT: " + data.cloud_pct
			wind_deg.innerHTML = "Wind deg: " + data.wind_degrees
			wind_speed.innerHTML = "Wind speed: " + data.wind_speed
		})
		.catch(err => console.log(err))
}
let othcity = document.getElementsByClassName('oth_city')
let othtemp = document.getElementsByClassName('oth_temp')
let othhum = document.getElementsByClassName('oth_humidity')

const cities1 = ["Chennai", "Delhi", "Bangalore", "Mysore", "Mumbai"]
const cities2 = ["Buffalo", "New York", "New Jersey", "Washington DC", "Chicago"]
const cities3 = ["Karachi", "Lahore", "Quetta", "Islamabad", "Dubai"]
const cities4 = ["Buenos Aires", "Beijing", "Mexico city", "Durban", "Sydney"]

let other_city = Math.floor((Math.random() * 4) + 1)
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities1[other_city], options)
	.then((res) => { return res.json() })
	.then((response) => {
		othcity[0].innerHTML = cities1[other_city]
		othcity[1].innerHTML = cities2[other_city]
		othcity[2].innerHTML = cities3[other_city]
		othcity[3].innerHTML = cities4[other_city]

		othtemp[0].innerHTML = response.temp
		othhum[0].innerHTML = response.humidity
	})

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities2[other_city], options)
	.then((res) => { return res.json() })
	.then((response) => {
		othtemp[1].innerHTML = response.temp
		othhum[1].innerHTML = response.humidity
	})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities3[other_city], options)
	.then((res) => { return res.json() })
	.then((response) => {
		othtemp[2].innerHTML = response.temp
		othhum[2].innerHTML = response.humidity
	})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities4[other_city], options)
	.then((res) => { return res.json() })
	.then((response) => {
		othtemp[3].innerHTML = response.temp
		othhum[3].innerHTML = response.humidity
	})