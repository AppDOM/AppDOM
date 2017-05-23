import {AppNode} from './AppNode';

export class AppElementNode extends AppNode {
  element: HTMLElement;

  constructor(tagName: string) {
    super(document.createElement(tagName));
  }

  addEventListener(
    evtName: string,
    listener: EventListenerOrEventListenerObject,
    capture: boolean
  ) {
    this.element.addEventListener(evtName, listener, capture);
  }

  removeEventListener(
    evtName: string,
    listener: EventListenerOrEventListenerObject,
    capture: boolean
  ) {
    this.element.removeEventListener(evtName, listener, capture);
  }
}
