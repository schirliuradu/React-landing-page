import { TextFieldValidator } from './abstracts/text-field';

export class FirstnameFieldValidator extends TextFieldValidator {
  constructor() {
    super('First name');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate(value: any): string | null {
    return super.validate(value);

    // add other validation logic here
  }
}
