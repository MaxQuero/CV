import { Education } from '../../core/types/cv.types';
import { SectionTitle } from '../../shared/ui/SectionTitle';
import { SECTION_TITLES } from '../../utils/constants';
import styles from './EducationSection.module.css';

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection = ({ education }: EducationSectionProps) => (
  <section aria-labelledby="education-heading">
    <SectionTitle id="education-heading">{SECTION_TITLES.EDUCATION}</SectionTitle>
    <ul className={styles.list}>
      {education.map((item) => (
        <li key={item.year} className={styles.item}>
          <p className={styles.degree}>{item.degree}</p>
          <p className={styles.meta}>
            {item.school} · <time>{item.year}</time>
          </p>
        </li>
      ))}
    </ul>
  </section>
);
