import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const[weatherinfo,setWeatherinfo]=useState({
    city: "delhi",
    feelslike: 315.39,
    humidity: 35,
    temp: 311.62,
    tempmax: 311.62,
    tempmin: 311.62,
    weather: "Overcast Clouds",
    });

    let updateinfo=(newinfo)=>{
    setWeatherinfo(newinfo);
    }
  return (
    <div><h1 style={{ color: "black" }}>Weather App</h1>
    <SearchBox updateinfo={updateinfo}/>
    <InfoBox info={weatherinfo}/>
    
    </div>
    
  )
};
