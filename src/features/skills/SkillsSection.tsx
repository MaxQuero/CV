import { SkillGroup } from '../../core/types/cv.types';
import { SectionTitle } from '../../shared/ui/SectionTitle';
import { SECTION_TITLES } from '../../utils/constants';
import styles from './SkillsSection.module.css';

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <section aria-labelledby="skills-heading">
    <SectionTitle id="skills-heading">{SECTION_TITLES.SKILLS}</SectionTitle>
    <dl className={styles.list}>
      {skills.map((group) => (
        <div key={group.category} className={styles.group}>
          <dt className={styles.category}>{group.category}</dt>
          <dd className={styles.items}>{group.items.join(', ')}</dd>
        </div>
      ))}
    </dl>
  </section>
);
