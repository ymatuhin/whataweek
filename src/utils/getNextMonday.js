import getDay from './getDay';

export const getNextMonday = now => {
  const thisYear = now.getFullYear();
  const thisMonth = now.getMonth();
  const date = now.getDate();
  const day = getDay(now);
  const daysTillNextWeek = 7 - day;
  return new Date(thisYear, thisMonth, date + daysTillNextWeek);
};
