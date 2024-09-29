import React from 'react';
import './time.scss';
export function CurrentTime(props) {
  return (
    <div className="currentTime">
      <div className="time">{props.time}</div>
    </div>
  );
}
