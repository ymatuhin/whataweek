import { createStore, createEvent, map, combine } from "storent";
import * as format from "./format";
import * as utils from "./utils";

const MAX_STUDY_WEEKS = 46;

const date = createStore<Date>(new Date());

const updateDate = createEvent<Date>();
date.on<Date>(updateDate, (_, payload) => payload);

const studyWeek = map(date, utils.getStudyWeekNumber);
const range = map(date, utils.getWeekRange);
const nextRange = map(date, utils.getNextWeekRange);
const vacationUntil = map(date, utils.getNextStudyYearStartDate);
const nextStudyRange = map(vacationUntil, (vacationUntil) => {
  const weekEnd = utils.getNextSunday(vacationUntil);
  return [vacationUntil, weekEnd] as [Date, Date];
});

export const isEven = map(studyWeek, utils.isEven);
export const type = combine(date, studyWeek, (date, studyWeek) => {
  const isEndOfWeek = utils.getDay(date) >= 5;
  const isVacation = studyWeek > MAX_STUDY_WEEKS;
  const type = isVacation ? "vacation" : isEndOfWeek ? "weekend" : "default";
  return type;
});

export const formatted = combine({
  today: map(date, format.date),
  range: map(range, format.range),
  nextRange: map(nextRange, format.range),
  vacationUntil: map(vacationUntil, format.until),
  nextStudyRange: map(nextStudyRange, format.range),
});
