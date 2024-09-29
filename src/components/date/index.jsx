import { CurrentTime } from './time';
import { CurrentDate } from './dayAndMonth';
export function DateAndTime(props) {
  return (
    <div>
      <CurrentTime time={props.time} />
      <CurrentDate />
    </div>
  );
}
