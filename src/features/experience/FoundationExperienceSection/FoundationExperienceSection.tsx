import { ExperienceItem } from '../ExperienceItem/ExperienceItem';
import { SectionTitle } from '../../../shared/ui/molecules/SectionTitle/SectionTitle';
import { SectionWrapper } from '../../../shared/ui/molecules/SectionWrapper/SectionWrapper';
import { FoundationExperience } from '../../../core/types/cv.types';
import { SECTION_TITLES } from '../../../utils/constants';

interface FoundationExperienceSectionProps {
  experiences: FoundationExperience[];
}

export const FoundationExperienceSection = ({ experiences }: FoundationExperienceSectionProps) => {
  return (
    <SectionWrapper spacing="large">
      <SectionTitle>{SECTION_TITLES.FOUNDATION_EXPERIENCES}</SectionTitle>
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} isMajor={false} />
      ))}
    </SectionWrapper>
  );
};
