import {AppNode} from './AppNode';
import {AppElementNode} from './AppElementNode';

export class AppElement extends AppElementNode {
  element : HTMLElement;
  children : AppNode[] = [];

  constructor(tagName : string) {
    super(tagName);
  }

  get elementChildren() : AppElementNode[] {
    let children = this.children.filter(child => child instanceof AppElementNode);
    return <AppElementNode[]> children;
  }

  get firstChild() : AppNode | null {
    let children = this.children;
    return children[0] || null;
  }

  get lastChild() : AppNode | null {
    let children = this.children;
    return children[children.length - 1] || null;
  }

  get firstElementChild() : AppElementNode | null {
    let children = this.elementChildren;
    return children[0] || null;
  }

  get lastElementChild() : AppElementNode | null {
    let children = this.elementChildren;
    return children[children.length - 1] || null;
  }

  removeChild(child : AppNode) : AppElement {
    this.element.removeChild(child.element);
    let pos : number = this.children.indexOf(child);
    this.children.splice(pos, 1);
    child.parent = null;

    return this;
  }

  appendChild(child : AppNode) : AppElement {
    this.element.appendChild(child.element);
    this.children.push(child);
    child.parent = this;

    return this;
  }
}
