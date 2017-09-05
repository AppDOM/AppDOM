import { AppElement } from './AppElement';
export declare class AppNode {
    element: HTMLElement | Text;
    parent: AppElement | null;
    constructor(element: HTMLElement | Text);
    remove(): AppNode;
    insertBefore(sibling: AppNode): AppNode;
    insertAfter(sibling: AppNode): AppNode;
    appendToDOM(dom: HTMLElement): AppNode;
}
