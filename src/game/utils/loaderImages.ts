export default function loaderImages(
  load: HTMLImageElement[],
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  callback: (...args: any[]) => void,
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  ...params: any[]
) {
  let counter = 0;
  console.dir(load);
  function updateConuter() {
    counter++;
    if (counter == load.length) {
      callback(...params);
    }
  }
  load.forEach((el: HTMLImageElement) => {
    el.onload = updateConuter;
  });
}
