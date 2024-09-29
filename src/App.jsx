import './index.scss';
import React from 'react';
import { CityAndCountry } from './components/city';
import { DateAndTime } from './components/date';
import { WeatherMain } from './components/weatherMain';
import axios from 'axios';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [weather, setWeather] = React.useState({});
  const fetchData = async () => {
    const API_KEY = '081f45f0370d4c6790e190727242509';
    let city = 'Обнинск';
    setIsLoading(true);
    const data = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&lang=ru`,
    );
    setIsLoading(false);
    setWeather(data);
  };
  function timeNum() {
    let hours, minutes;
    if (new Date().getHours < 10) {
      hours = '0' + new Date().getHours();
    } else {
      hours = new Date().getHours();
    }
    if (new Date().getMinutes() < 10) {
      minutes = '0' + new Date().getMinutes();
    } else {
      minutes = new Date().getMinutes();
    }
    let time = hours + ':' + minutes;
    return time;
  }
  const [timeL, setTimeL] = React.useState(timeNum());
  React.useEffect(() => {
    const timer = setInterval(() => {
      timeNum();
      setTimeL(timeNum());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="main">
      <div className="weatherTop">
        <div className="weatherTopContent">
          <DateAndTime time={timeL} />
          <CityAndCountry />
        </div>
      </div>
      <div className="weatherBottom">
        <WeatherMain fetchData={() => fetchData()} weather={weather} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
