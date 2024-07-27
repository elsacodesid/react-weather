import React from "react";
import { MainWrapper } from "./weather.module";
import { FcSearch } from "react-icons/fc";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";



const DisplayWeather = () => {
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
            <h1>Auckland</h1>
            <span>NZ</span>
            <div className="icon">
              icon  
            </div>
            <h1>18c</h1>
            <h2>Cloudy</h2>
        </div>
        <div className="bottomInfoArea">
            <div className="humidityLevel">
            <WiHumidity className="windIcon" />
            <div className="humidInfo">
                <h1>60%</h1>
                <p>Humidity</p>
            </div>

            </div>
            <div className="wind">
            <FaWind className="windIcon" />
            <div className="humidInfo">
            <h1>2.56 km /h</h1>
            <p>Wind speed</p>
            </div>
            </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default DisplayWeather;
