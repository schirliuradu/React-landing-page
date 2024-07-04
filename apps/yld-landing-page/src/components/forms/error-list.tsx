import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { ValidationError } from '../../types/validation';

export const ErrorList = ({
  errors,
}: {
  errors: ValidationError[];
}): JSX.Element => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {errors.map((error: ValidationError, index: number) => (
        <ListItem key={index} disablePadding={true}>
          <Typography variant="caption" color="error">
            {error.message}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};
