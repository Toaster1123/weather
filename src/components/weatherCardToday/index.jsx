import { WeatherTemp } from '../weather/temperature';
import { WeatherDayOfWeek } from '../weather/weatherDayWeek';
import styles from './weatherCardToday.module.scss';
export function WeatherCardToday(props) {
  return (
    <div className={styles.weatherCard}>
      <img src={props.images} height={128} width={128} />
      <div className={styles.dowAndTemp}>
        <div className={styles.dayOfWeekName}>Сегодня</div>
        <div className={styles.weatherTempMain}>
          <div className={styles.weatherTemp}>{props.temp}</div>
          <div className={styles.weatherCels}>o</div>
        </div>
      </div>
    </div>
  );
}
