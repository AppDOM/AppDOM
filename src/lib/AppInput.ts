import {AppElementNode} from './AppElementNode';

export class AppInput extends AppElementNode {
  element : HTMLInputElement;
  constructor(type: string = 'text') {
    super('input');
    this.element.type = type;
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

  get checked() : boolean {
    return this.element.checked;
  }

  set checked(val: boolean) {
    this.element.checked = val;
  }

  get defaultChecked() : boolean {
    return this.element.defaultChecked;
  }

  set defaultChecked(val: boolean) {
    this.element.defaultChecked = val;
  }
}
