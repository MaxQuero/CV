import { Typography } from '@mui/material';
import styles from './SectionSubtitle.module.css';

interface SectionSubtitleProps {
  children: React.ReactNode;
}

export const SectionSubtitle = ({ children }: SectionSubtitleProps) => {
  return (
    <Typography variant="h6" className={styles.root} component="h3" sx={{ margin: 0 }}>
      {children}
    </Typography>
  );
};

