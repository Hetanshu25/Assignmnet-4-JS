/*
Group Members:

Hetanshu Sonar
Ankita Ankita
Mohit Sharma
Sairaj Kondalwade
*/

// Grabbing elements by getElementById

const form = document.getElementById("location-form");
const input = document.getElementById("location-input");
const weatherInfo = document.querySelector(".weather-info");

//Form tag and fetching results

form.addEventListener("submit", fetchResults);

//Function tag to fetch Results and Event

function fetchResults(event) {
  event.preventDefault();
  const location = input.value;
  const apiKey = "2f1c990471e7bfd03cfbae6242394b15"; //Api Key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`; //Api Url

//Fetching apiUrl

  fetch(apiUrl)
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      displayResults(json);
    })
    .catch(function (err) {
        alert("Invalid City Name!");
    });
}

//Another function tag to display data

function displayResults(data) {
  const weatherDescription = data.weather[0].description;
  const temperature = data.main.temp;
  const city = data.name;
  const country = data.sys.country;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

  weatherInfo.innerHTML = `
    <p><strong>${city}, ${country}</strong></p>
    <p>${weatherDescription}</p>
    <p><img src="${iconUrl}" alt="${weatherDescription}"></p>
    <p>Temperature: ${temperature} &deg;C</p>
  `;  
}
