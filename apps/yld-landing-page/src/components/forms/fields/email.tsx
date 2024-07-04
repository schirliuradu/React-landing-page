import { TextField } from '@mui/material';
import { CommonFieldProps } from './types';

export const EmailAddressField = (
  commonFieldProps: CommonFieldProps
): JSX.Element => {
  const { name, label, errored, required } = commonFieldProps;

  return (
    <TextField
      variant="outlined"
      type="email"
      required={required ?? true}
      name={name ?? 'email'}
      label={label ?? 'Email address'}
      error={errored}
    />
  );
};
