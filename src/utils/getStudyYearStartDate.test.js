import { getStudyYearStartDate } from './getStudyYearStartDate';

test('get current study year date', () => {
  const date1 = new Date(2017, 10, 1);
  const date2 = new Date(2018, 2, 1);
  const date3 = new Date(2019, 10, 1);

  expect(getStudyYearStartDate(date1)).toEqual(new Date(2017, 8, 1));
  expect(getStudyYearStartDate(date2)).toEqual(new Date(2017, 8, 1));
  expect(getStudyYearStartDate(date3)).toEqual(new Date(2019, 8, 2));
});
