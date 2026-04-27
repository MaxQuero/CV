import { Typography } from '@mui/material';
import { Education } from '../../../core/types/cv.types';
import { HoverablePaper } from '../../../shared/ui/molecules/HoverablePaper/HoverablePaper';
import styles from './EducationItem.module.css';

interface EducationItemProps {
  education: Education;
}

export const EducationItem = ({ education }: EducationItemProps) => {
  return (
    <HoverablePaper className={styles.paper}>
      <Typography variant="body1" className={`font-semibold ${styles.degree}`}>
        {education.degree}
      </Typography>
      <Typography variant="body2" color="text.secondary" className={styles.school}>
        {education.school} • {education.year} • {education.level}
      </Typography>
    </HoverablePaper>
  );
};
