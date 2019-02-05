import { getStudyYearStartDate } from './getStudyYearStartDate';

test('get current study year date', () => {
  const septemberFirst2018 = new Date(2018, 8, 1);
  const septemberSecond2018 = new Date(2018, 8, 1);
  expect(getStudyYearStartDate(septemberFirst2018)).toEqual(septemberFirst2018);
  expect(getStudyYearStartDate(septemberSecond2018)).toEqual(
    septemberFirst2018,
  );

  const octoberFirst2018 = new Date(2018, 9, 1);
  expect(getStudyYearStartDate(octoberFirst2018)).toEqual(septemberFirst2018);
  const januaryFirst2019 = new Date(2019, 0, 1);
  expect(getStudyYearStartDate(januaryFirst2019)).toEqual(septemberFirst2018);
});
