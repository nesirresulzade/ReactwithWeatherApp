import React from 'react';
// import "../style/index.css";

function Week({ data }) {

    const forecastElements = [];
    const usedDates = new Set();

    if (!data || !data.list) {
        return;
    }

    for (let i = 0; i < data.list.length && forecastElements.length < 4; i++) {
        const forecast = data.list[i];
        const date = new Date(forecast.dt_txt).toLocaleDateString("en-GB");

        if (!usedDates.has(date)) {
            usedDates.add(date);

            const day = new Date(forecast.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric"
            });

            const temp = Math.round(forecast.main.temp);
            const iconCode = forecast.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
            const description = forecast.weather[0].description;

            forecastElements.push(
                <div className="forecast-day" key={date}>
                    <p>{day}</p>
                    <img src={iconUrl} alt={description} />
                    <p>{temp}°C</p>
                </div>
            );
        }
    }

    return (
        <div className="weather-forecast">
            {forecastElements}
        </div>
    );
}

export default Week;
