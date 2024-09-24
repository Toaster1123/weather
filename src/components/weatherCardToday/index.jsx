import { WeatherTemp } from '../weather/temperature';
import { WeatherDayOfWeek } from '../weather/weatherDayWeek';
import styles from './weatherCardToday.module.scss';
export function WeatherCardToday() {
  return (
    <div className={styles.weatherCard}>
      <img
        src="https://yastatic.net/weather/i/icons/funky/light/skc_d.svg"
        height={128}
        width={128}
      />
      <div className={styles.dowAndTemp}>
        <div className={styles.dayOfWeekName}>Сегодня</div>
        <div className={styles.weatherTempMain}>
          <div className={styles.weatherTemp}>12</div>
          <div className={styles.weatherCels}>o</div>
        </div>
      </div>
    </div>
  );
}
