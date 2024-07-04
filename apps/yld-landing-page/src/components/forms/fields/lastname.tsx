import { TextField } from '@mui/material';
import { CommonFieldProps } from './types';

export const LastnameField = (
  commonFieldProps: CommonFieldProps
): JSX.Element => {
  const { name, label, errored, required } = commonFieldProps;

  return (
    <TextField
      variant="outlined"
      required={required ?? true}
      name={name ?? 'lastName'}
      label={label ?? 'Last name'}
      error={errored}
    />
  );
};
