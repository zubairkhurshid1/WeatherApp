// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
    const [weather, setWeather] = useState(null);

    const fetchWeatherData = async (city) => {
        // const apiKey = '5ba98e9b4986a54b487e17944f2a603c';
        const apiKey = '4a0eb089cb1836ff0f15e25bbce1e1c8';
        
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
