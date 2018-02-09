import { store } from './store';
import { renderer } from './renderer';
import { isEven, getDay, getStudyWeek, beautyDate } from './utils';

const maxStudyWeeks = 46;

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
    const studyWeek = getStudyWeek(now);
    const isVacation = studyWeek > maxStudyWeeks;
    const isEndOfWeek = getDay(now) >= 5;

    const type = isVacation ? 'vacation' : isEndOfWeek ? 'weekend' : 'default';
    store.setType(type);
    store.update('isEven', isEven(studyWeek));
    store.update('range', beautyDate(now));
  }
}

// Первый учебный день в этом году, в том году и в следующем году.
// Номер текущей недели
// if default
//   Четность
//   range
//   nextRange
// if vacation
//   vacationRange: from 46 till next study week
//   studyRange: from first study week till second
// if weekend
//   range: start of week to end of week
//   nextRange: next week range

new App(document.querySelector('.js-blocks'));
