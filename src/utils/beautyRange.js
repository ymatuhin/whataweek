import { beautyMonth } from './beautyMonth';

const dayToArray = now => {
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  return { year, month, date };
};

export const beautyRange = ([fromDate, toDate]) => {
  const from = dayToArray(fromDate);
  const to = dayToArray(toDate);

  if (from.month === to.month) {
    return `${from.date} — ${to.date} ${beautyMonth(to.month)}`;
  } else {
    const fromString = `${from.date} ${beautyMonth(from.month)}`;
    const toString = `${to.date} ${beautyMonth(to.month)}`;
    return `${fromString} — ${toString}`;
  }
};
