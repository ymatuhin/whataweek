export const getStudyYearStartDate = (now: Date) => {
  const thisYear = now.getFullYear();
  const currentStudyDate = new Date(thisYear, 8, 1);
  const prevStudyDate = new Date(thisYear - 1, 8, 1);
  const studyDate = now < currentStudyDate ? prevStudyDate : currentStudyDate;
  return studyDate;
};
