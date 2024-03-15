import search_icon from "./assets/search.png";
import clear_icon from "./assets/clear.png";
import cloud_icon from "./assets/cloud.png";
import drizzle_icon from "./assets/drizzle.png";
import humidity_icon from "./assets/humidity.png";
import rain_icon from "./assets/rain.png";
import wind_icon from "./assets/wind.png";
import snow_icon from "./assets/snow.png";
import { useState } from "react";

const WeatherApp = () => {
  let api_key = "5e75406a78c2b1be3254b0e4e928d8b7";
  const [wicon, setwicon] = useState(cloud_icon);
  const search = async () => {
    const element = document.getElementsByClassName("cityinput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidityPercent");
    const windspeed = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("temp");
    const location = document.getElementsByClassName("locate");
    humidity[0].innerHTML = data.main.humidity + "%";
    windspeed[0].innerHTML = Math.floor(data.wind.speed) + "Km/hr";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°c";
    location[0].innerHTML = data.name;
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01d") {
      setwicon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setwicon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setwicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setwicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setwicon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setwicon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setwicon(snow_icon);
    } else {
      setwicon(clear_icon);
    }
  };
  return (
    <div className="boxer flex items-center flex-col w-[607px] h-[829px] m-auto mt-[75px] rounded-[12px] ">
      <div className=" flex justify-center gap-[14px] pt-[60px] ">
        <input
          type="text"
          placeholder="Search"
          className="cityinput flex w-[362px] h-[78px] bg-[#ebfffc] outline-none rounded-[40px] pl-[40px] text-[#626262] text-[20px] font-normal"
        />
        <div
          onClick={() => {
            search();
          }}
          className="flex justify-center text-black items-center w-[78px] h-[78px] bg-[#ebfffc] rounded-[40px] cursor-pointer"
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="mt-[29px] flex justify-center">
        <img src={wicon} alt="" />
      </div>
      <div className="temp flex justify-center text-white font-medium text-[120px]">
        24°c
      </div>
      <div className="locate flex justify-center text-white font-medium text-[60px]">
        London
      </div>
      <div className="flex gap-[10vw] text-white mt-[50px] text-[34px] text-center">
        <div className="flex gap-[12px] items-center m-auto">
          <img src={humidity_icon} alt="nothing" />
          <div>
            <div className="humidityPercent">64%</div>
            <div className="text-[20px]">Humidity</div>
          </div>
        </div>
        <div className="flex gap-[12px] items-center m-auto">
          <img src={wind_icon} alt="nothing" />
          <div>
            <div className="wind-speed">18km/hr</div>
            <div className="text-[20px]">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
