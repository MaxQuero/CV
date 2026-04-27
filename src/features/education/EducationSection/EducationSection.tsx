import { EducationItem } from '../EducationItem/EducationItem';
import { SectionTitle } from '../../../shared/ui/molecules/SectionTitle/SectionTitle';
import { SectionWrapper } from '../../../shared/ui/molecules/SectionWrapper/SectionWrapper';
import { Education } from '../../../core/types/cv.types';
import { SECTION_TITLES } from '../../../utils/constants';

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <SectionWrapper spacing="large">
      <SectionTitle>{SECTION_TITLES.EDUCATION}</SectionTitle>
      {education.map((edu, index) => (
        <EducationItem key={index} education={edu} />
      ))}
    </SectionWrapper>
  );
};
