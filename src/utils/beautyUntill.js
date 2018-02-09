import { beautyMonth } from './beautyMonth';

export const beautyUntill = toDate => {
  const month = toDate.getMonth();
  const date = toDate.getDate();

  return `до ${date} ${beautyMonth(month)}`;
};
