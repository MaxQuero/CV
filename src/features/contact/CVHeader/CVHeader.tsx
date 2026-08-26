import { Box, Typography, Chip } from '@mui/material';
import { ContactInfo } from '../ContactInfo/ContactInfo';
import { BorderedPaper } from '../../../shared/ui/molecules/BorderedPaper/BorderedPaper';
import { CVData } from '../../../core/types/cv.types';
import styles from './CVHeader.module.css';

interface CVHeaderProps {
  personalInfo: CVData['personalInfo'];
}

/** En-tête du document ; parent attendu : `.cvSheet` dans CVPage. */
export const CVHeader = ({ personalInfo }: CVHeaderProps) => {
  return (
    <Box className={styles.root}>
      <Box className={styles.inner}>
        <Box className={styles.content}>
          <Typography
            component="h1"
            variant="h1"
            className={styles.title}
            sx={{ color: 'var(--color-text-primary)' }}
          >
            {personalInfo.firstName} {personalInfo.lastName}
          </Typography>
          <Chip sx={{ fontSize: 'var(--font-size-md) !important' }} label={personalInfo.title} color="primary" className={styles.chip} />
          <Typography variant="body1" className={styles.tagline}>
            {personalInfo.tagline}
          </Typography>
          <BorderedPaper className={styles.contactPaper}>
            <ContactInfo
              email={personalInfo.email}
              phone={personalInfo.phone}
              location={personalInfo.location}
              linkedIn={personalInfo.linkedIn}
              github={personalInfo.github}
              website={personalInfo.website}
            />
          </BorderedPaper>
        </Box>
      </Box>
    </Box>
  );
};
