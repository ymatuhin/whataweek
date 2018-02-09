const renderEven = isEven =>
  isEven
    ? `<span class="blue">четная</span>`
    : `<span class="red">Нe</span><span class="blue">четная</span>`;

const renderVacation = date => `
  <div class="block">
    <div class="block__date">${date}</div>
    <div class="block__state / blue">отдых</div>
  </div>`;

const renderBlock = (date, isEven) => {
  return `<div class="block">
    <div class="block__date">${date}</div>
    <div class="block__state">${renderEven(isEven)}</div>
  </div>`;
};

let prevHtml = '';
export const renderer = $el => ({ type, today }, state) => {
  let html = `<p>Сегодня <b>${today}</b></p>`;

  if (type === 'vacation') {
    html +=
      renderVacation(state.vacationRange) +
      renderBlock(state.studyRange, false);
  }

  if (type === 'weekend') {
    html +=
      renderBlock(state.range, state.isEven) +
      renderBlock(state.nextRange, !state.isEven);
  }

  if (type === 'default') {
    html += renderBlock(state.range, state.isEven);
  }

  if (prevHtml !== html) {
    prevHtml = html;
    $el.innerHTML = html;
  }
};
