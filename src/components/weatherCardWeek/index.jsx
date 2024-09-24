import style from './weatherCardWeek.module.scss';
export function WeatherCardWeek(props) {
  return (
    <div className={style.weatherCard}>
      <div className={style.dayOfWeekName}>{props.dayOfWeek}</div>
      <img src={props.picture} height={90} width={90} />
      <div className={style.weatherTempMain}>
        <div className={style.weatherTemp}>{props.temp}</div>
        <div className={style.weatherCels}>o</div>
      </div>
    </div>
  );
}
