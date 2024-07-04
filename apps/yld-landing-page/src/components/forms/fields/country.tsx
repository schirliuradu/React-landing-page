import { TextField } from '@mui/material';
import { CommonFieldProps } from './types';

export const CountryField = (
  commonFieldProps: CommonFieldProps
): JSX.Element => {
  const { name, label, errored, required } = commonFieldProps;

  return (
    <TextField
      variant="outlined"
      required={required ?? true}
      name={name ?? 'country'}
      label={label ?? 'Country'}
      error={errored}
    />
  );
};
