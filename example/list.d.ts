import { AppElement, AppInput } from '..';
export declare class ListItem extends AppElement {
    checkbox: AppInput;
    label: AppElement;
    button: AppElement;
    constructor(text: string);
}
export declare class List extends AppElement {
    input: AppInput;
    list: AppElement;
    constructor();
}
