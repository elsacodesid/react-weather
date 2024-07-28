import React, { useEffect, useState } from "react";
import { MainWrapper } from "./weather.module";
import { FcSearch } from "react-icons/fc";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { BsCloudHaze } from "react-icons/bs";
import axios from "axios";

type WeatherData = {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
};


const DisplayWeather = () => {
  const api_key = "2ad64a080d7c1ba89ad0aaa9dda2c1e4";
  const api_endpoint = "https://api.openweathermap.org/data/2.5/weather?";

  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);

  const fetchData = async (lat: number, lon: number) => {
    const url = `${api_endpoint}lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const res = await axios.get(url);
    return res.data;
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchData(latitude, longitude).then((weather) => {
        if (weather) {
          console.log(weather)
          console.log("name: ", weather.name)
          setCurrentWeather(weather)
        }
      });
    });
  }, []);
  
  return (
    <MainWrapper>
    <div className="container">
      <div className="searchArea">
        <input type="text" placeholder="Enter a city..." />
        <div className="searchCircle">
          <FcSearch className="searchIcon" />
        </div>
      </div>
      <div className="weatherArea">
      <h1>{currentWeather ? currentWeather.name : "Loading..."}</h1>
         <span>{currentWeather ? currentWeather.sys.country : ""}</span>
        <div className="icon">
          <IoSunny color="yellow" />
          <IoPartlySunnyOutline color="orange" />
          <FaCloudShowersHeavy color="blue" />
          <BsCloudHaze color="#B0BEC5" />
        </div>
        <h1>{currentWeather?.main ? currentWeather.main.temp : "Loading..."}°C</h1>
        <h2>{currentWeather?.weather[0] ? currentWeather?.weather[0]?.description : "Loading..."}</h2>
      </div>
      <div className="bottomInfoArea">
        <div className="humidityLevel">
          <WiHumidity className="humidIcon" />
          <div className="humidInfo">
            <h1>60%</h1>
            <p>Humidity</p>
          </div>
        </div>
        <div className="wind">
          <FaWind className="windIcon" />
          <div className="humidInfo">
            <h1>2.56 km/h</h1>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  </MainWrapper>
  );
};

export default DisplayWeather;
