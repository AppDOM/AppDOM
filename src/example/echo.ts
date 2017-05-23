import {AppElement, AppInput, AppText} from '..';

export class Echo extends AppElement {
  input : AppInput;
  output : AppText;

  constructor() {
    super('echo');

    let input = this.input = new AppInput();
    let output = this.output = new AppText();

    this.appendChild(input);
    this.appendChild(output);

    input.addEventListener('input', () => {
      output.text = input.value;
    }, false);
  }
}


let echo = new Echo();

echo.appendToDOM(document.body);
