import React, { useState, useEffect } from 'react';
import { WeatherCardToday } from '../weatherCardToday';
import { WeatherCardWeek } from '../weatherCardWeek';
import style from './weatherMain.module.scss';

export function WeatherMain(props) {
  const dayOfWeekArr = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const items = [
    {
      picture: 'https://yastatic.net/weather/i/icons/funky/light/skc_d.svg',
      temp: '22',
    },
    {
      picture: 'https://yastatic.net/weather/i/icons/funky/light/skc_n.svg',
      temp: '18',
    },
    {
      picture: 'https://yastatic.net/weather/i/icons/funky/light/bkn_-ra_d.svg',
      temp: '13',
    },
    {
      picture: 'https://yastatic.net/weather/i/icons/funky/light/ovc.svg',
      temp: '9',
    },
    {
      picture: 'https://yastatic.net/weather/i/icons/funky/light/bkn_d.svg',
      temp: '-2',
    },
    {
      picture: 'https://yastatic.net/weather/i/icons/funky/light/bkn_+sn_d.svg',
      temp: '-7',
    },
  ];

  React.useEffect(() => {
    props.fetchData();
  }, []);
  const dow = new Date().getDay();
  for (let i = dow; i > 0; i--) {
    dayOfWeekArr.push(dayOfWeekArr.shift());
  }
  return (
    <div className={style.weatherFooter}>
      <div className={style.tempToday}>
        <WeatherCardToday
          images={
            props.isLoading
              ? '/img/weatherPictures/skc_d.svg'
              : props.weather.data.current.condition.icon
          }
          temp={props.isLoading ? 0 : Math.ceil(props.weather.data.current.temp_c)}
        />
      </div>
      <div className={style.tempWeek}>
        {items.map((item, index) => {
          return (
            <WeatherCardWeek
              key={index}
              picture={
                props.isLoading
                  ? '/img/weatherPictures/skc_d.svg'
                  : props.weather.data.forecast.forecastday[index].day.condition.icon
              }
              dayOfWeek={dayOfWeekArr[index + 1]}
              temp={
                props.isLoading
                  ? 0
                  : Math.ceil(props.weather.data.forecast.forecastday[index].day.avgtemp_c)
              }
            />
          );
        })}
      </div>
    </div>
  );
}
