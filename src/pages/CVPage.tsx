import { Box, Grid } from '@mui/material';
import { CVHeader } from '../features/contact/CVHeader/CVHeader';
import { Sidebar } from '../features/contact/Sidebar/Sidebar';
import { MajorExperienceSection } from '../features/experience/MajorExperienceSection/MajorExperienceSection';
import { cvData } from '../core/data/cvData';
import { CV_GRID_SPACING } from '../theme/cvLayout';
import styles from './CVPage.module.css';

export const CVPage = () => {
  return (
    <Box className={styles.root}>
      <Box className={styles.mainCapture}>
        <Box className={styles.cvSheet}>
          <CVHeader personalInfo={cvData.personalInfo} />
          <Grid
            container
            direction="row-reverse"
            spacing={CV_GRID_SPACING}
            className={styles.grid}
          >
            <Grid item xs={8}>
              <MajorExperienceSection experiences={cvData.majorExperiences} />
            </Grid>
            <Grid item xs={4}>
              <Sidebar
                skills={cvData.skills}
                education={cvData.education}
                languages={cvData.languages}
                foundationExperiences={cvData.foundationExperiences}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
