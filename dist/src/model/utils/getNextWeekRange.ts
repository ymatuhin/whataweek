import { getDay } from "./getDay";

export const getNextWeekRange = (now: Date): [Date, Date] => {
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate() + 7;
  const day = getDay(now);

  const startDate = new Date(year, month, date - day);
  const endDate = new Date(year, month, date + 6 - day);

  return [startDate, endDate];
};
