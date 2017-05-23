import {AppElement, AppInput} from '..';

export class ListItem extends AppElement {
  checkbox : AppInput;
  label : AppElement;
  button : AppElement;

  constructor(text : string) {
    super('li');

    let checkbox = this.checkbox = new AppInput('checkbox');
    let label = this.label = new AppElement('label', text);
    let button = this.button = new AppElement('button', 'X');

    this.appendChild(checkbox);
    this.appendChild(label);
    this.appendChild(button);

    let self = this;

    button.addEventListener('click', () => {
      self.remove();
    }, false);
  }
}

export class List extends AppElement {
  input : AppInput;
  list : AppElement;

  constructor() {
    super('list');

    let input = this.input = new AppInput();
    let list = this.list = new AppElement('ul');

    this.appendChild(input);
    this.appendChild(list);

    input.addEventListener('change', () => {
      this.list.appendChild(new ListItem(input.value));
      input.value = '';
    }, false);
  }
}


let list = new List();

list.appendToDOM(document.body);
