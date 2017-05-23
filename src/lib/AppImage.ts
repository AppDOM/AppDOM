import {AppElementNode} from './AppElementNode';

export class AppImage extends AppElementNode {
  element : HTMLImageElement;
  constructor(src : string, lowsrc? : string) {
    super('img');

    if (lowsrc) {
      this.lowsrc = lowsrc;
    }
    this.src = src;
  }

  get src() : string {
    return this.element.src;
  }

  set src(val : string) {
    this.element.src = val;
  }

  get lowsrc() : string {
    return this.element.lowsrc;
  }

  set lowsrc(val : string) {
    this.element.lowsrc = val;
  }
}
