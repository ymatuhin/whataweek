import { getStudyYearStartDate } from './getStudyYearStartDate';
import { getNextMonday } from './getNextMonday';

export const getStudyWeekNumber = now => {
  const oneWeek = 604800000;
  const september1st = getStudyYearStartDate(now);
  const modaySecondStudyWeek = getNextMonday(september1st);
  if (now.valueOf() < modaySecondStudyWeek.valueOf()) return 1;
  if (modaySecondStudyWeek.valueOf() === now.valueOf()) return 2;
  return 1 + Math.ceil((now - modaySecondStudyWeek) / oneWeek);
};
