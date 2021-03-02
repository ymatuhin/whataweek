import { getNextMonday } from './getNextMonday';

test('get next monday', () => {
  expect(getNextMonday(new Date(2018, 2, 5))).toEqual(new Date(2018, 2, 12));
  expect(getNextMonday(new Date(2018, 2, 6))).toEqual(new Date(2018, 2, 12));
  expect(getNextMonday(new Date(2018, 2, 7))).toEqual(new Date(2018, 2, 12));
  expect(getNextMonday(new Date(2018, 2, 8))).toEqual(new Date(2018, 2, 12));
  expect(getNextMonday(new Date(2018, 2, 9))).toEqual(new Date(2018, 2, 12));
  expect(getNextMonday(new Date(2018, 2, 10))).toEqual(new Date(2018, 2, 12));
  expect(getNextMonday(new Date(2018, 2, 11))).toEqual(new Date(2018, 2, 12));
});
