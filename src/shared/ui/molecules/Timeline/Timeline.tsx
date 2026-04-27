import { Box } from '@mui/material';
import styles from './Timeline.module.css';

interface TimelineProps {
  children: React.ReactNode;
}

export const Timeline = ({ children }: TimelineProps) => {
  return <Box className={styles.root}>{children}</Box>;
};

