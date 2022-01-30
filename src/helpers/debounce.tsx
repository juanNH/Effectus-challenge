export const debounce = (callback: Function, wait: number) => {
  let timerId: any;
  return (...args: any[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
