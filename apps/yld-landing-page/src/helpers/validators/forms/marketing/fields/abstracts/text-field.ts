import { FieldValidator } from './../../../../../../types/validation/index';

export abstract class TextFieldValidator implements FieldValidator {
  constructor(protected readonly fieldName: string) {}

  validate(value: string): string | null {
    console.log('value', value);
    if (!value) {
      return `${this.fieldName} is required`;
    }

    if (value.length < 3) {
      return `${this.fieldName} must have at least 3 chars`;
    }

    return null;
  }
}
