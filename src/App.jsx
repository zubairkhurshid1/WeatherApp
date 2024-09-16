// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
    const [weather, setWeather] = useState(null);

    const fetchWeatherData = async (city) => {
        const apiKey = 'Enter API KEY';
        
 // Replace with your API key
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('City not found');
        }
    };

    return (
        <div className="app">
            <h1>Weather Dashboard</h1>
            <SearchBar onSearch={fetchWeatherData} />
            <WeatherCard weather={weather} />
        </div>
    );
};

export default App;
