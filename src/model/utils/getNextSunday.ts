import { getDay } from "./getDay";

export const getNextSunday = (now: Date) => {
  const thisYear = now.getFullYear();
  const thisMonth = now.getMonth();
  const date = now.getDate();
  const day = getDay(now);
  const diff = 6 - day;
  return new Date(thisYear, thisMonth, date + diff);
};
