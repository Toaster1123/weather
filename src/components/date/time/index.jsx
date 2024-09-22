import React from 'react';
import './time.scss';
export function CurrentTime() {
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
      console.log(timeNum());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="currentTime">
      <div className="time">{timeL}</div>
      <div className="PM">PM</div>
    </div>
  );
}
