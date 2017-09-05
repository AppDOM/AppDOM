import { AppElementNode } from './AppElementNode';
export declare class AppInput extends AppElementNode {
    element: HTMLInputElement;
    constructor(type?: string);
    value: string;
    defaultValue: string;
    checked: boolean;
    defaultChecked: boolean;
}
