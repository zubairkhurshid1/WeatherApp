// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city.trim()) {
            onSearch(city.trim());
            setCity('');
        }
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
