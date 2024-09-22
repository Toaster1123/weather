import { WeatherCardToday } from '../weatherCardToday';
import style from './weatherMain.module.scss';
export function WeatherMain() {
  return (
    <div className={style.weatherFooter}>
      <div className={style.tempToday}>
        <WeatherCardToday />
      </div>
      <div className="tempWeek"></div>
    </div>
  );
}
