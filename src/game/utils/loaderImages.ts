/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function loaderImages(
  load: HTMLImageElement[],
  callback: (done: number, all: number) => void
) {
  let counter = 0;
  console.dir(load);
  function updateCounter() {
    counter++;
    callback(counter, load.length);
  }
  load.forEach((el: HTMLImageElement) => {
    if (el.complete) updateCounter();
    else el.onload = updateCounter;
  });
}
