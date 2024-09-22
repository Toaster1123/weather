import './index.scss';
import { CityAndCountry } from './components/city';
import { DateAndTime } from './components/date';
import {WeatherMain} from './components/weatherMain'
function App() {
  return (
    <div className="main">
      <div className="weatherTop">
        <div className="weatherTopContent">
          <DateAndTime />
          <CityAndCountry />
        </div>
      </div>
      <div className="weatherBottom">
        <WeatherMain/>
      </div>
    </div>
  );
}

export default App;
