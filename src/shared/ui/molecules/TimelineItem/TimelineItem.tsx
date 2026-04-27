import { Box } from '@mui/material';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  children: React.ReactNode;
  isLast?: boolean;
}

export const TimelineItem = ({ children, isLast = false }: TimelineItemProps) => {
  const rootClass = [styles.root, isLast && styles.rootLast].filter(Boolean).join(' ');
  return <Box className={rootClass}>{children}</Box>;
};

