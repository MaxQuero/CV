import { Box, Typography } from '@mui/material';
import styles from './StarItem.module.css';

interface StarItemProps {
  label: string;
  children: React.ReactNode;
}

export const StarItem = ({ label, children }: StarItemProps) => {
  return (
    <Box className={styles.root}>
      <Typography variant="body2" component="p" className={styles.label}>
        {label}
      </Typography>
      {children}
    </Box>
  );
};

