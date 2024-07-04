import { ValidationError, Validator } from '../../../../types/validation';
import { CountryFieldValidator } from './fields/country';
import { EmailFieldValidator } from './fields/email';
import { FirstnameFieldValidator } from './fields/firstname';
import { LastnameFieldValidator } from './fields/lastname';
import { PhoneNumberFieldValidator } from './fields/phone-number';
import { PhonePrefixFieldValidator } from './fields/phone-prefix';

export class MarketingFormValidator implements Validator {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate(data: Record<string, any>): ValidationError[] | null {
    const errors: ValidationError[] = [];

    Object.keys(data).forEach((key: string) => {
      let error: string | null = null;

      switch (key) {
        case 'firstName':
          error = new FirstnameFieldValidator().validate(data[key]);

          break;
        case 'lastName':
          error = new LastnameFieldValidator().validate(data[key]);

          break;
        case 'email':
          error = new EmailFieldValidator().validate(data[key]);

          break;
        case 'phonePrefix':
          error = new PhonePrefixFieldValidator().validate(data[key]);

          break;
        case 'phoneNumber':
          error = new PhoneNumberFieldValidator().validate(data[key]);

          break;
        case 'country':
          error = new CountryFieldValidator().validate(data[key]);

          break;
        default:
          break;
      }

      if (error) {
        errors.push({ field: key, message: error });
      }
    });

    return errors.length ? errors : null;
  }
}
