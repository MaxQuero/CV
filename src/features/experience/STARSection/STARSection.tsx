import { Box, Typography } from '@mui/material';
import styles from './STARSection.module.css';

interface STARSectionProps {
  situation: string;
  task: string;
  action: string[];
  result: string;
}

export const STARSection = ({ situation, task, action, result }: STARSectionProps) => {
  return (
    <Box className={styles.root}>
      <Typography
        variant="body2"
        color="text.secondary"
        className="line-height-loose"
        sx={{ fontStyle: 'italic' }}
      >
        {situation}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        className="line-height-loose"
        sx={{ fontStyle: 'italic' }}
      >
        {task}
      </Typography>
      <Box component="ul" className={styles.actionList}>
        {action.map((item, index) => (
          <Box key={index} component="li" className={styles.actionItem}>
            <Typography
              variant="body2"
              color="text.secondary"
              className="line-height-loose"
              sx={{ m: 0 }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography
        variant="body2"
        color="text.secondary"
        className="line-height-loose"
        sx={{ fontWeight: 700 }}
      >
        {result}
      </Typography>
    </Box>
  );
};
