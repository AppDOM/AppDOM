import { AppElementNode } from './AppElementNode';
export declare class AppImage extends AppElementNode {
    element: HTMLImageElement;
    constructor(src: string, lowsrc?: string);
    src: string;
    lowsrc: string;
}
