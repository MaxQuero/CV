import { Box, Typography } from '@mui/material';
import { StarItem } from '../../../shared/ui/molecules/StarItem/StarItem';
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
      <StarItem label="Situation">
        <Typography variant="body2" color="text.secondary" className="line-height-loose">
          {situation}
        </Typography>
      </StarItem>
      <StarItem label="Tâche">
        <Typography variant="body2" color="text.secondary" className="line-height-loose">
          {task}
        </Typography>
      </StarItem>
      <StarItem label="Actions">
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
      </StarItem>
      <StarItem label="Résultat">
        <Typography variant="body2" color="text.secondary" className="line-height-loose">
          {result}
        </Typography>
      </StarItem>
    </Box>
  );
};
