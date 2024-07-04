import { TextField } from '@mui/material';
import { CommonFieldProps } from './types';

export const FirstnameField = (
  commonFieldProps: CommonFieldProps
): JSX.Element => {
  const { name, label, errored, required } = commonFieldProps;

  return (
    <TextField
      variant="outlined"
      required={required ?? true}
      name={name ?? 'firstName'}
      label={label ?? 'First name'}
      error={errored}
    />
  );
};
