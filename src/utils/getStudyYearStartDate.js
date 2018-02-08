export const getStudyYearStartDate = now => {
  const septemberMonth = 8;
  const thisYear = now.getFullYear();
  const newSeptember = new Date(thisYear, septemberMonth, 1);
  const prevSeptember = new Date(thisYear - 1, septemberMonth, 1);
  const september = now < newSeptember ? prevSeptember : newSeptember;
  return september;
};
