import {AppNode} from './AppNode';

export class AppElementNode extends AppNode {
  element : HTMLElement;

  constructor(tagName : string) {
    super(document.createElement(tagName));
  }

  get style() {
    return this.element.style;
  }

  get title() {
    return this.element.title;
  }

  set title(val : string) {
    this.element.title = val;
  }

  addEventListener(
    evtName : string,
    listener : EventListenerOrEventListenerObject,
    capture : boolean
  ) : AppElementNode {
    this.element.addEventListener(evtName, listener, capture);

    return this;
  }

  removeEventListener(
    evtName : string,
    listener : EventListenerOrEventListenerObject,
    capture : boolean
  ) : AppElementNode {
    this.element.removeEventListener(evtName, listener, capture);

    return this;
  }
}
