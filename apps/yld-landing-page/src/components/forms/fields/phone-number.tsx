import { TextField } from '@mui/material';
import { CommonFieldProps } from './types';

export const PhoneNumberField = (
  commonFieldProps: CommonFieldProps
): JSX.Element => {
  const { name, label, errored, required } = commonFieldProps;

  return (
    <TextField
      variant="outlined"
      type="number"
      required={required ?? true}
      name={name ?? 'phoneNumber'}
      label={label ?? 'Phone number'}
      error={errored}
    />
  );
};
