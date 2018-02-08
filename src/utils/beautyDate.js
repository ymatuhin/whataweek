import { beautyWeekDay } from './beautyWeekDay';

export const beautyDate = now => {
  const week = beautyWeekDay(now);
  return `${week}, ${now.toLocaleString('ru')}`;
};
