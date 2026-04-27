import { Box, Chip } from '@mui/material';
import styles from './ChipList.module.css';

interface ChipListProps {
  items: string[];
  spacing?: number;
  className?: string;
}

export const ChipList = ({ items, spacing = 1, className }: ChipListProps) => {
  const rootClass = [spacing < 1 ? [styles.root, styles.rootTight].join(' ') : styles.root, className]
    .filter(Boolean)
    .join(' ');
  return (
    <Box className={rootClass}>
      {items.map((item) => (
        <Chip key={item} label={item} size="small" />
      ))}
    </Box>
  );
};

