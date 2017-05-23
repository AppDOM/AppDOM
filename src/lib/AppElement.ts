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

  removeChild(child : AppNode) {
    this.element.removeChild(child.element);
    let pos : number = this.children.indexOf(child);
    this.children.splice(pos, 1);
    child.parent = null;
  }

  appendChild(child : AppNode) {
    this.element.appendChild(child.element);
    this.children.push(child);
    child.parent = this;
  }
}
