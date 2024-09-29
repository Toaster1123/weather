import './dayAndMonth.scss';
export function CurrentDate() {
  let numdate = new Date().getDate();
  let mounthObj = {
    1: 'Января',
    2: 'Февраля',
    3: 'Марта',
    4: 'Апреля',
    5: 'Мая',
    6: 'Июня',
    7: 'Июля',
    8: 'Августа',
    9: 'Сентября',
    10: 'Октября',
    11: 'Ноября',
    12: 'Декабря',
  };
  let dayOfWeekObj = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  let numMounth = new Date().getMonth() + 1;
  let numDayOfWeek = new Date().getDay();
  return (
    <div className="currentDate">
      <div className="dayOfWeek">{dayOfWeekObj[numDayOfWeek]}, </div>
      <div className="date">
        {numdate} {mounthObj[numMounth]}
      </div>
    </div>
  );
}
