import { StyledFieldsRow, StyledForm } from '../styles';
import { Validator } from '../../../types/validation';
import { useFormSubmit } from '../../../hooks/use-form-submit';
import { CountryField } from '../fields/country';
import { FirstnameField } from '../fields/firstname';
import { LastnameField } from '../fields/lastname';
import { PhonePrefixField } from '../fields/phone-prefix';
import { PhoneNumberField } from '../fields/phone-number';
import { EmailAddressField } from '../fields/email';
import { ErrorList } from '../error-list';
import { Privacy } from '../fields/privacy/privacy';
import { ThankYouStep } from '../steps/thank-you-step';
import { SubmitButton } from '../common/buttons/submit-button';

export type MarketingFormProps = {
  endpoint: string;
  validator: Validator;
};

export type MarketingFormComponent = React.ComponentType<MarketingFormProps>;

export const MarketingForm = ({ endpoint, validator }: MarketingFormProps) => {
  const { formRef, errors, handleSubmit, isSubmitted, checkFieldError } =
    useFormSubmit(validator, endpoint);

  if (isSubmitted) {
    return <ThankYouStep />;
  } else {
    return (
      <div>
        <StyledForm ref={formRef} onSubmit={handleSubmit}>
          <StyledFieldsRow>
            <CountryField errored={checkFieldError('country')} />
          </StyledFieldsRow>

          <StyledFieldsRow>
            <FirstnameField errored={checkFieldError('firstName')} />
            <LastnameField errored={checkFieldError('lastName')} />
          </StyledFieldsRow>

          <StyledFieldsRow>
            <PhonePrefixField errored={checkFieldError('phonePrefix')} />
            <PhoneNumberField errored={checkFieldError('phoneNumber')} />
          </StyledFieldsRow>

          <StyledFieldsRow>
            <EmailAddressField errored={checkFieldError('email')} />
          </StyledFieldsRow>

          <Privacy />

          <SubmitButton label="Join us" />

          {errors.length > 0 && <ErrorList errors={errors} />}
        </StyledForm>
      </div>
    );
  }
};
