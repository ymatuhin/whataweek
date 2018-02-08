export const getDay = now => {
  const day = now.getDay() - 1;
  return day === -1 ? 6 : day;
};
