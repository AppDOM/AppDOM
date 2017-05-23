import {AppNode} from './AppNode';

export class AppText extends AppNode {
  element: Text;
  constructor(text: string = '') {
    super(document.createTextNode(text));
  }

  get text() : string | null {
    return this.element.textContent;
  }

  set text(val: string | null) {
    this.element.textContent = val;
  }
}
