import { getStudyWeekNumber } from './getStudyWeekNumber';

it('getStudyWeekNumber', () => {
  const septemberFirst2017 = new Date(2017, 8, 1);
  expect(getStudyWeekNumber(septemberFirst2017)).toBe(1);

  const septemberFirst2018 = new Date(2018, 8, 1);
  expect(getStudyWeekNumber(septemberFirst2018)).toBe(1);

  const septemberSecond2018 = new Date(2018, 8, 2);
  expect(getStudyWeekNumber(septemberSecond2018)).toBe(1);

  const septemberThird2018 = new Date(2018, 8, 3);
  expect(getStudyWeekNumber(septemberThird2018)).toBe(2);

  const septemberFourth2018 = new Date(2018, 8, 4);
  expect(getStudyWeekNumber(septemberFourth2018)).toBe(2);

  const septemberFirst2019 = new Date(2019, 8, 1);
  expect(getStudyWeekNumber(septemberFirst2019)).toBe(1);

  const septemberSecond2019 = new Date(2019, 8, 2);
  expect(getStudyWeekNumber(septemberSecond2019)).toBe(2);
});
