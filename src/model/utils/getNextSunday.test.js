import { getNextSunday } from './getNextSunday';

test('get next sunday', () => {
  expect(getNextSunday(new Date(2018, 2, 5))).toEqual(new Date(2018, 2, 11));
  expect(getNextSunday(new Date(2018, 2, 6))).toEqual(new Date(2018, 2, 11));
  expect(getNextSunday(new Date(2018, 2, 7))).toEqual(new Date(2018, 2, 11));
  expect(getNextSunday(new Date(2018, 2, 8))).toEqual(new Date(2018, 2, 11));
  expect(getNextSunday(new Date(2018, 2, 9))).toEqual(new Date(2018, 2, 11));
  expect(getNextSunday(new Date(2018, 2, 10))).toEqual(new Date(2018, 2, 11));
});
