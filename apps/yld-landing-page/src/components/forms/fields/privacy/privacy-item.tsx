import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

export const PrivacyItem = ({
  label,
  consentName,
  required,
}: {
  label: string;
  consentName: string;
  required?: boolean;
}): JSX.Element => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={consentName}
          required={required ?? true}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 16 },
            padding: 0.3,
          }}
        />
      }
      label={
        <Typography
          variant="caption"
          style={{ fontSize: '0.675rem', color: '#9992a0' }}
        >
          {label}
        </Typography>
      }
      style={{ marginRight: 'auto' }}
    />
  );
};
