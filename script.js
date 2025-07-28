const offlineData = {
  delhi: {
    city: "Delhi",
    temp: "34°C",
    condition: "Sunny",
    humidity: "45%",
  },
  mumbai: {
    city: "Mumbai",
    temp: "30°C",
    condition: "Cloudy",
    humidity: "70%",
  },
  chennai: {
    city: "Chennai",
    temp: "33°C",
    condition: "Partly Cloudy",
    humidity: "60%",
  },
  kolkata: {
    city: "Kolkata",
    temp: "31°C",
    condition: "Rainy",
    humidity: "85%",
  }
};

function showWeather() {
  const input = document.getElementById("cityInput").value.trim().toLowerCase();
  const weatherBox = document.getElementById("weatherBox");

  if (offlineData[input]) {
    const data = offlineData[input];
    weatherBox.innerHTML = `
      <h3>${data.city}</h3>
      <p>Temperature: ${data.temp}</p>
      <p>Condition: ${data.condition}</p>
      <p>Humidity: ${data.humidity}</p>
    `;
  } else {
    weatherBox.innerHTML = `<p>Weather data not available for "${input}".</p>`;
  }
}
