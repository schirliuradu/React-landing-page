import { TextField } from '@mui/material';
import { CommonFieldProps } from './types';

export const PhonePrefixField = (
  commonFieldProps: CommonFieldProps
): JSX.Element => {
  const { name, label, errored, required } = commonFieldProps;

  return (
    <TextField
      variant="outlined"
      type="number"
      required={required ?? true}
      name={name ?? 'phonePrefix'}
      label={label ?? 'Phone prefix'}
      error={errored}
    />
  );
};
