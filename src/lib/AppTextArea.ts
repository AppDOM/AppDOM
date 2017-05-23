import {AppElementNode} from './AppElementNode';

export class AppTextArea extends AppElementNode {
  element : HTMLTextAreaElement;
  constructor(value: string) {
    super('textarea');
    this.value = value;
  }

  get value() : string {
    return this.element.value;
  }

  set value(val: string) {
    this.element.value = val;
  }

  get defaultValue() : string {
    return this.element.defaultValue;
  }

  set defaultValue(val: string) {
    this.element.defaultValue = val;
  }
}
