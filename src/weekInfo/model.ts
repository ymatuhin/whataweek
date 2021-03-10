import { createLogger } from "@ymatuhin/debug";
import { storeLense } from "shared/store-lense";
import { writable, derived } from "svelte/store";
import * as format from "./format";
import * as utils from "./utils";

const log = createLogger("📆 model");
const date = writable<Date>(new Date());

const invertedLense = storeLense("inverted");
const invertedValue = invertedLense.get() || false;

export const inverted = writable<boolean>(invertedValue);

const studyWeek = derived(date, utils.getStudyWeekNumber);
const range = derived(date, utils.getWeekRange);
const nextRange = derived(date, utils.getNextWeekRange);
const vacationUntil = derived(date, utils.getNextStudyYearStartDate);
const nextStudyRange = derived(vacationUntil, (vacationUntil) => {
  const weekEnd = utils.getNextSunday(vacationUntil);
  return [vacationUntil, weekEnd] as [Date, Date];
});

export const isEven = derived([studyWeek, inverted], ([studyWeek, inverted]) => {
  const isEvenByWeek = utils.isEven(studyWeek);
  return inverted ? !isEvenByWeek : isEvenByWeek;
});
export const type = derived([date, studyWeek], ([date, studyWeek]) => {
  const isEndOfWeek = utils.getDay(date) >= 5;
  const MAX_STUDY_WEEKS = 46;
  const isVacation = studyWeek > MAX_STUDY_WEEKS;
  const type = isVacation ? "vacation" : isEndOfWeek ? "weekend" : "default";
  return type;
});

export const formatted = derived(
  [date, range, nextRange, vacationUntil, nextStudyRange],
  ([date, range, nextRange, vacationUntil, nextStudyRange]) => ({
    today: format.date(date),
    range: format.range(range),
    nextRange: format.range(nextRange),
    vacationUntil: format.until(vacationUntil),
    nextStudyRange: format.range(nextStudyRange),
  }),
);

log.store("date", date);
log.store("isEven", isEven);
log.store("type", type);
log.store("formatted", formatted);
log.store("inverted", inverted);
inverted.subscribe(invertedLense.set);
