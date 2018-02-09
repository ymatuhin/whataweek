import { beautyMonth } from './beautyMonth';

export const beautyDate = inputDate => {
  const date = inputDate.getDate();
  const month = inputDate.getMonth();

  return `${date} ${beautyMonth(month)}`;
};
