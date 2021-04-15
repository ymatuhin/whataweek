import rafThrottle from "raf-throttle";

type RafListen = (node: Document | HTMLElement, eventName: string, fn: Function) => Function;

const rafListen: RafListen = (node = document, eventName = "", fn = () => {}) => {
  const onEvent = rafThrottle(fn);
  node.addEventListener(eventName, onEvent, false);
  return () => {
    node.removeEventListener(eventName, onEvent, false);
    onEvent.cancel();
  };
};

export { rafListen };
