import { getDay } from "./getDay";

export const getNextStudyYearStartDate = (now: Date) => {
  const thisYear = now.getFullYear();
  const currentStudyDate = new Date(thisYear, 8, 1);
  const nextStudyDate = new Date(thisYear + 1, 8, 1);
  const studyDate = now < currentStudyDate ? currentStudyDate : nextStudyDate;

  if (getDay(studyDate) === 6) {
    const year = studyDate.getFullYear();
    const month = studyDate.getMonth();
    const day = studyDate.getDate() + 1;
    return new Date(year, month, day);
  }

  return studyDate;
};
