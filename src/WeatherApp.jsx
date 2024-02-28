import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"

export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        city: "Wonderland",
        feelsLike: 24.05,
        temp: 25.00,
        tempMin: 23.72,
        tempMax: 26.02,
        humidity: 47,
        weather: "Haze"
    }
)

let updateInfo = (result) =>{
    setWeatherInfo(result);
}

    return(
        <div>
            <h2 style={{textAlign:"center"}}>WEATHER-APP</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}