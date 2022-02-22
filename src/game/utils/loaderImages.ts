/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function loaderImages(
  load: HTMLImageElement[],
  callback: (...args: any[]) => void,
  ...params: any[]
) {
  let counter = 0;
  console.dir(load);
  function updateCounter() {
    counter++;
    if (counter == load.length) {
      callback(...params);
    }
  }
  load.forEach((el: HTMLImageElement) => {
    if (el.complete) updateCounter();
    else el.onload = updateCounter;
  });
}
