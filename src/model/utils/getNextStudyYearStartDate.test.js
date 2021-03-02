import { getNextStudyYearStartDate } from './getNextStudyYearStartDate';

test('get next study year date', () => {
  const date1 = new Date(2017, 10, 1);
  const date2 = new Date(2018, 2, 1);
  const date3 = new Date(2018, 10, 1);

  expect(getNextStudyYearStartDate(date1)).toEqual(new Date(2018, 8, 1));
  expect(getNextStudyYearStartDate(date2)).toEqual(new Date(2018, 8, 1));
  expect(getNextStudyYearStartDate(date3)).toEqual(new Date(2019, 8, 2));
});
