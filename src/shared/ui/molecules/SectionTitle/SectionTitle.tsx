import { Typography } from '@mui/material';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <Typography
      variant="h4"
      className={styles.root}
      sx={{ color: 'var(--color-text-primary)', margin: 0 }}
    >
      {children}
    </Typography>
  );
};

