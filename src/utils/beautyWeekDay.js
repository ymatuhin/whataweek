import { getDay } from './getDay';

export const beautyWeekDay = now => {
  const day = getDay(now);
  if (day === 0) return 'понедельник';
  if (day === 1) return 'вторник';
  if (day === 2) return 'среда';
  if (day === 3) return 'четверг';
  if (day === 4) return 'пятница';
  if (day === 5) return 'суббота';
  if (day === 6) return 'воскресенье';
};
