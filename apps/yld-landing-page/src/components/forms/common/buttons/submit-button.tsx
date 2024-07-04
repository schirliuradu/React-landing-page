import { Button } from '@mui/material';

export const SubmitButton = ({ label }: { label: string }): JSX.Element => {
  return (
    <Button
      variant="contained"
      type="submit"
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
      }}
    >
      {label}
    </Button>
  );
};
