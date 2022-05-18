/* eslint-disable  @typescript-eslint/no-explicit-any */
// TODO: Переименовать, к примеру DataManager или LoadManager
export class Loader {
  all: number;
  counter: number;
  callback: (done: number, all: number) => void;
  constructor() {
    this.all = 0;
    this.counter = 0;
  }
  add(el: any) {
    this.all++;
    el.onload = this.updateCounter.bind(this);
    el.onerror = console.log;
  }
  setCallback(callback: (done: number, all: number) => void) {
    this.callback = callback;
    if (this.counter == this.all) this.callback(this.counter, this.all);
    return [this.counter, this.all];
  }
  updateCounter() {
    this.counter++;
    if (this.callback) {
      this.callback(this.counter, this.all);
    }
  }
}
