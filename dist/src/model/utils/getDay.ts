export const getDay = (now: Date) => {
  const day = now.getDay() - 1;
  return day === -1 ? 6 : day;
};
