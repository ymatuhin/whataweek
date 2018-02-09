import { getDay } from './getDay';

export const getWeekRange = now => {
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const day = getDay(now);

  const startDate = new Date(year, month, date - day);
  const endDate = new Date(year, month, date + 6 - day);

  return [startDate, endDate];
};
