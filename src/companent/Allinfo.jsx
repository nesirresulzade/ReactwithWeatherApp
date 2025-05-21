import React from 'react';
// import "../style/index.css";


function Allinfo({ data }) {
    if (!data || !data.list || !data.city) {
        return;
    }

    const location = `${data.city.name}, ${data.city.country}`;
    const temperature = `${Math.round(data.list[0].main.temp)}°C`;
    const description = data.list[0].weather[0].description;
    const windSpeed = `${data.list[0].wind.speed} m/s`;

    return (
        <div className="weather-card">
            <h2>{location}</h2>
            <p className="temp">{temperature}</p>
            <p className="details">Description: {description}</p>
            <p className="details">Country: {data.city.country}</p>
            <p className="details">Wind Speed: {windSpeed}</p>
        </div>
    );
}

export default Allinfo;
