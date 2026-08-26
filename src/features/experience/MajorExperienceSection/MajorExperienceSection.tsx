import { Box } from '@mui/material';
import { ExperienceItem } from '../ExperienceItem/ExperienceItem';
import { SectionTitle } from '../../../shared/ui/molecules/SectionTitle/SectionTitle';
import { SectionWrapper } from '../../../shared/ui/molecules/SectionWrapper/SectionWrapper';
import { MajorExperience } from '../../../core/types/cv.types';
import { SECTION_TITLES } from '../../../utils/constants';
import sectionStyles from './MajorExperienceSection.module.css';

interface MajorExperienceSectionProps {
  experiences: MajorExperience[];
}

export const MajorExperienceSection = ({ experiences }: MajorExperienceSectionProps) => {
  return (
    <SectionWrapper spacing="normal" className={sectionStyles.impactZone}>
      <SectionTitle>{SECTION_TITLES.MAJOR_EXPERIENCES}</SectionTitle>
      <Box className={sectionStyles.experienceList}>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} isMajor={true} />
        ))}
      </Box>
    </SectionWrapper>
  );
};
