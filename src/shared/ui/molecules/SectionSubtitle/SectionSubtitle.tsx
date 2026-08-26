import { Typography } from '@mui/material';
import styles from './SectionSubtitle.module.css';

interface SectionSubtitleProps {
  children: React.ReactNode;
  id?: string;
}

export const SectionSubtitle = ({ children, id }: SectionSubtitleProps) => {
  return (
    <Typography id={id} variant="h6" className={styles.root} component="h3" >
      {children}
    </Typography>
  );
};

