import { getDay } from './getDay';

test('get day', () => {
  const monday = new Date(2018, 1, 5);
  const tuesday = new Date(2018, 1, 6);
  const wednesday = new Date(2018, 1, 7);
  const thursday = new Date(2018, 1, 8);
  const friday = new Date(2018, 1, 9);
  const saturday = new Date(2018, 1, 10);
  const sunday = new Date(2018, 1, 11);
  expect(getDay(monday)).toBe(0);
  expect(getDay(tuesday)).toBe(1);
  expect(getDay(wednesday)).toBe(2);
  expect(getDay(thursday)).toBe(3);
  expect(getDay(friday)).toBe(4);
  expect(getDay(saturday)).toBe(5);
  expect(getDay(sunday)).toBe(6);
});
