import { WeatherTemp } from "../weather/temperature" 
import { WeatherDayOfWeek } from "../weather/weatherDayWeek"
import { WeatherPic } from "../weather/weatherPic"
export function WeatherCardWeek(){
    return(
        <div className="weatherCardWeek">
            <WeatherPic/>
            <WeatherDayOfWeek/>
            <WeatherTemp/>
        </div>
    )
}