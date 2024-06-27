const cityInput = document.getElementById('city-input');
const submitBtn = document.getElementById('submit-btn');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

submitBtn.addEventListener('click', getWeather);

function getWeather() {
    const city = cityInput.value;
    const apiKey = '5f2317fc77bca64c5a131cc1f72f0d02';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    cityName.textContent = 'Loading...';
    temperature.textContent = '';
    description.textContent = '';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            cityName.textContent = data.name;
            temperature.textContent = `${data.main.temp}°C`;
            description.textContent = data.weather[0].description;
        })
        .catch(error => {
            cityName.textContent = 'Error';
            temperature.textContent = '';
            description.textContent = error.message;
        });
}
