import { AppNode } from './AppNode';
import { AppElementNode } from './AppElementNode';
export declare class AppElement extends AppElementNode {
    element: HTMLElement;
    children: AppNode[];
    constructor(tagName: string, children?: string | AppNode[]);
    readonly elementChildren: AppElementNode[];
    readonly firstChild: AppNode | null;
    readonly lastChild: AppNode | null;
    readonly firstElementChild: AppElementNode | null;
    readonly lastElementChild: AppElementNode | null;
    removeChild(child: AppNode): AppElement;
    appendChild(child: AppNode): AppElement;
}
