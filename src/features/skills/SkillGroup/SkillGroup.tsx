import { Box, Typography, Chip } from '@mui/material';
import styles from './SkillGroup.module.css';

interface SkillGroupProps {
  category: string;
  items: string[];
  compact?: boolean;
}

export const SkillGroup = ({ category, items }: SkillGroupProps) => {

  
  return (
    <Box className={styles.root}>
      <Typography variant='h6' className={styles.category}>
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

