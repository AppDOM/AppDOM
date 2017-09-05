import { AppNode } from './AppNode';
export declare class AppElementNode extends AppNode {
    element: HTMLElement;
    constructor(tagName: string);
    readonly style: CSSStyleDeclaration;
    title: string;
    addEventListener(evtName: string, listener: EventListenerOrEventListenerObject, capture: boolean): AppElementNode;
    removeEventListener(evtName: string, listener: EventListenerOrEventListenerObject, capture: boolean): AppElementNode;
}
