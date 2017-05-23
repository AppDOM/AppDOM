import {AppElement} from './AppElement';

export class AppNode {
  element :  HTMLElement | Text;
  parent : AppElement | null = null;

  constructor(element : HTMLElement | Text) {
    if (element instanceof HTMLElement || element instanceof Text) {
      this.element = element;
    } else {
      throw new Error('Cannot construct AppNode');
    }
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }

  insertBefore(sibling : AppNode) {
    let parent = sibling.parent;
    if (parent) {
      this.remove();
      parent.element.insertBefore(this.element, sibling.element);
      let pos : number = parent.children.indexOf(sibling);
      parent.children.splice(pos, 0, this);

      this.parent = parent;
    }
  }

  insertAfter(sibling : AppNode) {
    let parent = sibling.parent;
    if (parent) {
      this.remove();
      parent.element.insertBefore(this.element, sibling.element.nextSibling);
      let pos : number = parent.children.indexOf(sibling);
      parent.children.splice(pos + 1, 0, this);

      this.parent = parent;
    }
  }

  appendToDOM(dom : HTMLElement) {
    dom.appendChild(this.element);
  }
}
