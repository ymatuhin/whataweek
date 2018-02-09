import { getStudyYearStartDate } from './getStudyYearStartDate';

export const getStudyWeekNumber = now => {
  const oneWeek = 604800000;
  const september1st = getStudyYearStartDate(now);
  return Math.ceil((now - september1st) / oneWeek) + 1;
};
