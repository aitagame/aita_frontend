/* eslint-disable  @typescript-eslint/no-explicit-any */
interface Handler {
  callback: () => void;
  eventType: string;
  eventTarget: any;
}

export class EventManager {
  counter: number;
  handlers: Handler[];
  constructor() {
    this.handlers = [];
  }
  add(eventTarget: any, eventType: string, callback: (event?: any) => any) {
    this.handlers.push({
      callback,
      eventType,
      eventTarget,
    });
    eventTarget.addEventListener(eventType, callback);
  }
  removeAll() {
    this.handlers.forEach(handler => {
      handler.eventTarget.removeEventListener(handler.eventType, handler.callback);
    });
  }
}
