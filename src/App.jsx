import { useEffect, useState } from 'react';


import "./style/index.css";
import Header from './companent/Header';
import Week from './companent/Week';
import Allinfo from './companent/Allinfo';

import clouds from "./gifts/clouds.gif";
import foggy from "./gifts/foggy.gif";
import Rainy_Day from "./gifts/Rainy_Day.gif";
import snowy from "./gifts/snowy.gif";
import strom from "./gifts/strom.gif";
import sunny from "./gifts/Vp9G.gif";


function App() {
  const API_KEY = "246533ebb4500f2a9d0397ffb19b6464";

  const [city, setCity] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    if (!city) return;

    async function searchWeather() {
      const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

      try {
        const response = await fetch(API_URL);
        const result = await response.json();

        if (result.cod !== "200") {
          alert("Şəhər tapılmadı! Zəhmət olmasa düzgün şəhər adı daxil edin.");
          return;
        }

        setData(result);
      } catch (error) {
        alert("Məlumat alınarkən xəta baş verdi. İnternet bağlantınızı yoxlayın!");
      }
    }

    searchWeather();
  }, [city]);


  function getBackgroundImage(weatherMain) {
    switch (weatherMain) {
      case "Clear":
        return sunny;
      case "Clouds":
        return clouds;
      case "Rain":
        return Rainy_Day;
      case "Snow":
        return snowy;
      case "Thunderstorm":
        return strom;
      case "Drizzle":
        return foggy;
      default:
        return "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"

    }
  }

  const weatherMain = data?.list?.[0]?.weather?.[0]?.main;

  useEffect(() => {
    const backgroundUrl = getBackgroundImage(weatherMain);
    const container = document.querySelector(".weather-container");
    if (container) {
      container.style.backgroundImage = `url(${backgroundUrl})`;
      container.style.backgroundSize = "cover";
      container.style.backgroundPosition = "center";
    }
  }, [weatherMain]);


  return (
    <div className="weather-container">
      <Header setCity={setCity} />
      <Week data={data} />
      <Allinfo data={data} />
    </div>
  );
}

export default App;
