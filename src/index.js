import { store } from './store';
import { renderer } from './renderer';
import {
  isEven,
  getDay,
  getStudyWeekNumber,
  getWeekRange,
  getNextWeekRange,
  getNextStudyYearStartDate,
  getNextSunday,
  beautyRange,
  beautyUntill,
  beautyDate,
} from './utils';

class App {
  constructor($el) {
    this.$el = $el;

    const render = renderer(this.$el);
    store.subscribe(render);

    this.update();
    setInterval(this.update.bind(this), 1000);
  }

  update() {
    const now = new Date();
    const type = this.getType(now);
    const studyWeek = getStudyWeekNumber(now);

    store.setType(type);
    store.setToday(beautyDate(now));
    if (type === 'vacation') this.updateVacation(now);
    if (type === 'weekend') this.updateWeekend(now);
    if (type === 'default') this.updateDefault(now);
  }

  updateDefault(date) {
    const studyWeek = getStudyWeekNumber(date);
    store.update('isEven', isEven(studyWeek));
    store.update('range', beautyRange(getWeekRange(date)));
  }

  updateWeekend(date) {
    const studyWeek = getStudyWeekNumber(date);
    store.update('isEven', isEven(studyWeek));
    store.update('range', beautyRange(getWeekRange(date)));
    store.update('nextRange', beautyRange(getNextWeekRange(date)));
  }

  updateVacation(date) {
    const newYearDate = getNextStudyYearStartDate(date);
    const weekEnd = getNextSunday(newYearDate);
    store.update('vacationRange', beautyUntill(newYearDate));
    store.update('studyRange', beautyRange([newYearDate, weekEnd]));
  }

  getType(date) {
    const maxStudyWeeks = 46;
    const studyWeek = getStudyWeekNumber(date);
    const isEndOfWeek = getDay(date) >= 5;
    const isVacation = studyWeek > maxStudyWeeks;
    const type = isVacation ? 'vacation' : isEndOfWeek ? 'weekend' : 'default';
    return type;
  }
}

new App(document.querySelector('.js-blocks'));
