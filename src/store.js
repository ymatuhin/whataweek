export const store = {
  listeners: [],
  state: {
    type: 'default',
    today: '',
    vacation: {
      vacationRange: '',
      studyRange: '',
    },
    weekend: {
      isEven: false,
      range: '',
      nextRange: '',
    },
    default: {
      isEven: false,
      range: '',
    },
  },
  setType(val) {
    this.state.type = val;
  },
  setToday(val) {
    this.state.today = val;
  },
  update(key, value) {
    this.state[this.state.type][key] = value;
    this.listeners.forEach(fn => fn(this.state, this.state[this.state.type]));
  },
  subscribe(fn) {
    this.listeners.push(fn);
  },
};
