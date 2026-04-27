import { ExperienceItem } from '../ExperienceItem/ExperienceItem';
import { Timeline } from '../../../shared/ui/molecules/Timeline/Timeline';
import { TimelineItem } from '../../../shared/ui/molecules/TimelineItem/TimelineItem';
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
    <SectionWrapper spacing="large" className={sectionStyles.impactZone}>
      <SectionTitle>{SECTION_TITLES.MAJOR_EXPERIENCES}</SectionTitle>
      <Timeline>
        {experiences.map((experience, index) => (
          <TimelineItem key={index} isLast={index === experiences.length - 1}>
            <ExperienceItem experience={experience} isMajor={true} />
          </TimelineItem>
        ))}
      </Timeline>
    </SectionWrapper>
  );
};
