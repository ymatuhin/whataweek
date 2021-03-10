import { monthName } from "./monthName";

const dayToArray = (now: Date) => {
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  return { year, month, date };
};

export const range = ([fromDate, toDate]: [Date, Date]) => {
  const from = dayToArray(fromDate);
  const to = dayToArray(toDate);

  if (from.month === to.month) {
    return `${from.date} — ${to.date} ${monthName(to.month)}`;
  } else {
    const fromString = `${from.date} ${monthName(from.month)}`;
    const toString = `${to.date} ${monthName(to.month)}`;
    return `${fromString} — ${toString}`;
  }
};
