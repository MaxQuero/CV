import { Box, Typography, Chip } from '@mui/material';
import { ContactInfo } from '../ContactInfo/ContactInfo';
import { BorderedPaper } from '../../../shared/ui/molecules/BorderedPaper/BorderedPaper';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto';
import { CVData } from '../../../core/types/cv.types';
import styles from './CVHeader.module.css';

interface CVHeaderProps {
  personalInfo: CVData['personalInfo'];
}

/** À placer dans le `MuiContainer-root` de la page (maxWidth lg + `.mainCapture`), pas de `Container` interne. */
export const CVHeader = ({ personalInfo }: CVHeaderProps) => {
  return (
    <Box className={styles.root}>
      <Box className={styles.inner}>
        <Box className={styles.content}>
          <Typography variant="h2" className={styles.title} sx={{ color: 'var(--color-text-primary)' }}>
            {personalInfo.firstName} {personalInfo.lastName}
          </Typography>
          <Chip label={personalInfo.title} color="primary" className={styles.chip} />
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
        <Box className={styles.aside}>
          <ProfilePhoto
            photoUrl={personalInfo.photoUrl}
            nameForAlt={`Photo de ${personalInfo.firstName} ${personalInfo.lastName}`}
          />
        </Box>
      </Box>
    </Box>
  );
};
