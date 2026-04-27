import { Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface ContactItemProps {
  icon: ReactNode;
  children: ReactNode;
}

export const ContactItem = ({ icon, children }: ContactItemProps) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {icon}
      <Typography variant="body2" color="text.secondary">{children}</Typography>
    </Stack>
  );
};

