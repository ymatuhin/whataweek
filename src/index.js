import { getWeekNumber, getStudyWeek, beautyDate } from './utils';
const maxStudyWeeks = 45;

class Interface {
  constructor() {
    this.$elems = {
      date: document.getElementById('date'),
      weekYear: document.getElementById('weekYear'),
      weekStudy: document.getElementById('weekStudy'),
    };

    this.updateHtml();
    setInterval(() => this.updateHtml(), 1000);
  }
  updateHtml() {
    const now = new Date();
    const today = beautyDate(now);
    const weekYearNumber = getWeekNumber(now);
    const weekStudyNumber = getStudyWeek(now);

    this.$elems.date.innerText = today;
    this.$elems.weekYear.innerText = weekYearNumber;
    this.$elems.weekStudy.innerText = weekStudyNumber;
  }
}

new Interface();

// const update = () => {
//   const now = new Date();

//   const $date = document.getElementById('date');
//   $date.innerText = getBeautyToday(now);

//   const $week = document.getElementById('week');
//   $week.innerText = getWeekNumber(now);

//   const $studyWeek = document.getElementById('st_week');
//   const studyWeek = getStudyWeek(now);
//   $studyWeek.innerText = studyWeek;

//   const $red = document.getElementById('red');
//   const $red2 = document.getElementById('red2');
//   const isChet = studyWeek % 2 === 0;
//   $red.style.display = isChet ? 'none' : '';
//   $red2.style.display = isChet ? '' : 'none';

//   const $endWeek = document.getElementById('warnEndWeek');
//   $endWeek.style.display = getDay(now) > 4 ? '' : 'none';

//   const $sep1 = document.getElementById('sep1');
//   $sep1.style.display = studyWeek > 50 ? '' : 'none';
// };

// update();
// setInterval(update, 1000);
