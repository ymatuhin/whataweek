export const getWeekNumber = now => {
  const oneWeek = 604800000;
  const thisYear = now.getFullYear();
  const yearStart = new Date(thisYear, 0, 1);
  const diff = now - yearStart;
  return Math.ceil(diff / oneWeek);
};
