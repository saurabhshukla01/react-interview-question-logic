import React, { useState } from "react";
import './App.css';
import './WeatherApp.css';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // <- Insert your API Key here

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name');
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
        setError('');
      } else {
        setError(data.message);
        setWeather(null);
      }
    } catch (err) {
      setError('Error fetching weather data');
      setWeather(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="app">
      <h1>Weather App 🌦️</h1>
      <form onSubmit={handleSearch} className="form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <h3>{weather.weather[0].main}</h3>
          <p>🌡️ Temperature: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
          <p>🔻 Min Temp: {weather.main.temp_min} °C</p>
          <p>🔺 Max Temp: {weather.main.temp_max} °C</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
