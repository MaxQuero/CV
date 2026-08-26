import { Language } from '../../core/types/cv.types';
import { SectionTitle } from '../../shared/ui/SectionTitle';
import { SECTION_TITLES } from '../../utils/constants';
import styles from './LanguagesSection.module.css';

interface LanguagesSectionProps {
  languages: Language[];
}

export const LanguagesSection = ({ languages }: LanguagesSectionProps) => (
  <section aria-labelledby="languages-heading">
    <SectionTitle id="languages-heading">{SECTION_TITLES.LANGUAGES}</SectionTitle>
    <ul className={styles.list}>
      {languages.map((language) => (
        <li key={language.name} className={styles.item}>
          <strong>{language.name}</strong>
          <span className={styles.level}>{language.level}</span>
        </li>
      ))}
    </ul>
  </section>
);
