export const store = {
  listeners: [],
  state: {
    type: 'default',
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
    this.type = val;
  },
  update(key, value) {
    this.state[this.type][key] = value;
    this.listeners.forEach(fn => fn(this.type, this.state[this.type]));
  },
  subscribe(fn) {
    this.listeners.push(fn);
  },
};
