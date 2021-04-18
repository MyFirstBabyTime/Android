import {useState, useEffect} from 'react';

export interface TimerInterface {
  minute: number;
  second: number;
}

export const UseTimer = () => {
  const [timer, setTimer] = useState<TimerInterface>({minute: 5, second: 0});
  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer.second > 0) {
        setTimer({minute: timer.minute, second: timer.second - 1});
      }
      if (timer.second === 0) {
        if (timer.minute === 0) {
          clearInterval(countdown);
        } else {
          setTimer({minute: timer.minute - 1, second: 59});
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);
  return timer;
};
