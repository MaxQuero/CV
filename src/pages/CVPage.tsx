import { cvData } from '../core/data/cvData';
import { Header } from '../features/header/Header';
import { ExperienceSection } from '../features/experience/ExperienceSection';
import { PreviousExperiences } from '../features/experience/PreviousExperiences';
import { SkillsSection } from '../features/skills/SkillsSection';
import { EducationSection } from '../features/education/EducationSection';
import { LanguagesSection } from '../features/languages/LanguagesSection';
import styles from './CVPage.module.css';

export const CVPage = () => (
  <main className={styles.sheet}>
    <Header personalInfo={cvData.personalInfo} />
    <div className={styles.columns}>
      <div className={styles.mainCol}>
        <ExperienceSection experiences={cvData.experiences} />
        <PreviousExperiences experiences={cvData.previousExperiences} />
      </div>
      <aside className={styles.sideCol}>
        <SkillsSection skills={cvData.skills} />
        <EducationSection education={cvData.education} />
        <LanguagesSection languages={cvData.languages} />
      </aside>
    </div>
  </main>
);
