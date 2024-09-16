// src/components/WeatherCard.jsx
import React from 'react';

const WeatherCard = ({ weather }) => {
    if (!weather) return null;

    const { name, main, weather: [condition] } = weather;

    const getBackgroundColor = (weatherCondition) => {
        switch (weatherCondition) {
            case 'Clear':
                return '#87CEEB'; // Light sky blue
            case 'Clouds':
                return '#B0C4DE'; // Light steel blue
            case 'Rain':
                return '#4682B4'; // Steel blue
            case 'Snow':
                return '#F0F8FF'; // Alice blue
            default:
                return '#f0f0f0'; // Default color
        }
    };

    const backgroundColor = getBackgroundColor(condition.main);

    return (
        <div className="weather-card" style={{ backgroundColor }}>
            <h2>{name}</h2>
            <p>Temperature: {main.temp}°C</p>
            <p>Condition: {condition.description}</p>
            <p>Current Time: {new Date().toLocaleTimeString()}</p>
        </div>
    );
};

export default WeatherCard;
