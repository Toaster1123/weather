import { WeatherCardToday } from '../weatherCardToday';
import { WeatherCardWeek } from '../weatherCardWeek';
import style from './weatherMain.module.scss';
export function WeatherMain() {
  const items = [
    {
      picture: 'https://yastatic.net/weather/i/icons/funky/light/skc_d.svg',
      dayOfWeek: 'Среда',
      temp: '22',
    },
    {
      picture: 'https://yastatic.net/weather/i/icons/funky/light/skc_n.svg',
      dayOfWeek: 'Четверг',
      temp: '18',
    },
    {
      picture: 'https://yastatic.net/weather/i/icons/funky/light/bkn_-ra_d.svg',
      dayOfWeek: 'Пятница',
      temp: '13',
    },
    {
      picture: 'https://yastatic.net/weather/i/icons/funky/light/ovc.svg',
      dayOfWeek: 'Суббота',
      temp: '9',
    },
    {
      picture: 'https://yastatic.net/weather/i/icons/funky/light/bkn_d.svg',
      dayOfWeek: 'Воскресенье',
      temp: '-2',
    },
    {
      picture: 'https://yastatic.net/weather/i/icons/funky/light/bkn_+sn_d.svg',
      dayOfWeek: 'Понедельник',
      temp: '-7',
    },
  ];
  return (
    <div className={style.weatherFooter}>
      <div className={style.tempToday}>
        <WeatherCardToday />
      </div>
      <div className={style.tempWeek}>
        {items.map((item) => {
          return (
            <WeatherCardWeek picture={item.picture} dayOfWeek={item.dayOfWeek} temp={item.temp} />
          );
        })}
      </div>
    </div>
  );
}
