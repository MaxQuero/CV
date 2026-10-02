import { Experience } from '../../core/types/cv.types';
import { SectionTitle } from '../../shared/ui/SectionTitle';
import { SECTION_TITLES } from '../../utils/constants';
import { ExperienceItem } from './ExperienceItem';
import styles from './ExperienceSection.module.css';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => (
  <section aria-labelledby="experiences-heading">
    <SectionTitle id="experiences-heading">{SECTION_TITLES.EXPERIENCES}</SectionTitle>
    <div className={styles.list}>
      {experiences.map((experience) => (
        <ExperienceItem key={`${experience.company}-${experience.startDate}`} experience={experience} />
      ))}
    </div>
  </section>
);
