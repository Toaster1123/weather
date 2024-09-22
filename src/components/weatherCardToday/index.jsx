import { WeatherTemp } from '../weather/temperature';
import { WeatherDayOfWeek } from '../weather/weatherDayWeek';
import { WeatherPic } from '../weather/weatherPic';
import styles from './weatherCardToday.module.scss';
export function WeatherCardToday() {
  return (
    <div className={styles.weatherCardToday}>
      <WeatherPic />
      <div className={styles.dowAndTemp}>
        <div className={styles.dayOfWeekName}>Сегодня</div>
        <WeatherTemp size={'size'} />
      </div>
    </div>
  );
}
