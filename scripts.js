const apiKey = "441a055eaf9078d577480b925c20af97";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

searchButton.addEventListener("click", () => {
    const location = locationInput.value;
    if(location){
        fetchWeather(location);
    }else {
        alert("Please enter a location!");
    }

});

function fetchWeather(location){
    const url =`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
            //countryElement.text = data.sys.country;
        })
        .catch((error) => {
            console.error("Error while fetching weather data: ", error);
        });
}
