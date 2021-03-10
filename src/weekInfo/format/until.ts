import { monthName } from "./monthName";

export const until = (toDate: Date) => {
  const month = toDate.getMonth();
  const date = toDate.getDate();

  return `до ${date} ${monthName(month)}`;
};
