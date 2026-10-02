import { PreviousExperience } from '../../core/types/cv.types';
import { SectionTitle } from '../../shared/ui/SectionTitle';
import { SECTION_TITLES } from '../../utils/constants';
import styles from './PreviousExperiences.module.css';

interface PreviousExperiencesProps {
  experiences: PreviousExperience[];
}

export const PreviousExperiences = ({ experiences }: PreviousExperiencesProps) => (
  <section aria-labelledby="previous-experiences-heading">
    <SectionTitle id="previous-experiences-heading">{SECTION_TITLES.PREVIOUS_EXPERIENCES}</SectionTitle>
    <ul className={styles.list}>
      {experiences.map((experience) => (
        <li key={`${experience.company}-${experience.period}`} className={styles.row}>
          <span className={styles.period}>{experience.period}</span>
          <span className={styles.body}>
            <strong>{experience.position}</strong>, {experience.company}
            <span className={styles.stack}> · {experience.technologies.join(', ')}</span>
          </span>
        </li>
      ))}
    </ul>
  </section>
);
