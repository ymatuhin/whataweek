export const skipFirstCall = function (fn: Function) {
  let called = false;
  return (...args) => {
    if (called) fn(...args);
    else called = true;
  };
};
