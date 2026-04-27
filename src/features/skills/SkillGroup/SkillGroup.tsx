import { Box, Typography, Chip } from '@mui/material';
import styles from './SkillGroup.module.css';

interface SkillGroupProps {
  category: string;
  items: string[];
  compact?: boolean;
}

export const SkillGroup = ({ category, items, compact = false }: SkillGroupProps) => {
  const rootClass = compact ? [styles.root, styles.rootCompact].join(' ') : styles.root;
  const categoryClass = compact ? [styles.category, styles.categoryCompact].join(' ') : styles.category;
  return (
    <Box className={rootClass}>
      <Typography variant={compact ? 'body2' : 'h6'} className={categoryClass}>
        {category}
      </Typography>
      <Box className={styles.chips}>
        {items.map((item) => (
          <Chip key={item} label={item} size="small" />
        ))}
      </Box>
    </Box>
  );
};

