import { TextFieldValidator } from './abstracts/text-field';

export class PhonePrefixFieldValidator extends TextFieldValidator {
  constructor() {
    super('Phone prefix');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate(value: any): string | null {
    return super.validate(value);

    // add other validation logic here
  }
}
