import { monthName } from "./monthName";

export const date = (inputDate: Date) => {
  const date = inputDate.getDate();
  const month = inputDate.getMonth();

  return `${date} ${monthName(month)}`;
};
