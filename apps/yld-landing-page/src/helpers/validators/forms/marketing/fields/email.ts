import { TextFieldValidator } from './abstracts/text-field';

export class EmailFieldValidator extends TextFieldValidator {
  constructor() {
    super('Email');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate(value: any): string | null {
    return super.validate(value);

    // add other validation logic here
  }
}
