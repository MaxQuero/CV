import { Divider, Paper, Typography } from '@mui/material';
import { SkillGroup } from '../../skills/SkillGroup/SkillGroup';
import { SectionSubtitle } from '../../../shared/ui/molecules/SectionSubtitle/SectionSubtitle';
import { HoverablePaper } from '../../../shared/ui/molecules/HoverablePaper/HoverablePaper';
import { EducationItem } from '../../education/EducationItem/EducationItem';
import { ExperienceItem } from '../../experience/ExperienceItem/ExperienceItem';
import { CVData } from '../../../core/types/cv.types';
import { SECTION_TITLES } from '../../../utils/constants';
import styles from './Sidebar.module.css';

interface SidebarProps {
  skills: CVData['skills'];
  education: CVData['education'];
  languages: CVData['languages'];
  foundationExperiences: CVData['foundationExperiences'];
}

export const Sidebar = ({ skills, education, languages, foundationExperiences }: SidebarProps) => {
  return (
    <Paper
      elevation={0}
      className={styles.root}
      sx={{ background: 'var(--background-sidebar)' }}
    >
      <SectionSubtitle>Compétences</SectionSubtitle>
      {skills.map((skillGroup, index) => (
        <SkillGroup key={index} category={skillGroup.category} items={skillGroup.items} compact />
      ))}

      <Divider className={styles.divider} sx={{ borderColor: 'var(--surface-sidebar-border)' }} />

      <SectionSubtitle>{SECTION_TITLES.EDUCATION}</SectionSubtitle>
      {education.map((edu, index) => (
        <EducationItem key={index} education={edu} />
      ))}

      <Divider className={styles.divider} sx={{ borderColor: 'var(--surface-sidebar-border)' }} />

      <SectionSubtitle>{SECTION_TITLES.LANGUAGES}</SectionSubtitle>
      {languages.map((lang, index) => (
        <HoverablePaper key={index} className={styles.langCard}>
          <Typography variant="body2" className={`font-semibold ${styles.langLabel}`}>
            {lang.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.langLevel}>
            {lang.level}
          </Typography>
        </HoverablePaper>
      ))}

      <Divider className={styles.divider} sx={{ borderColor: 'var(--surface-sidebar-border)' }} />

      <SectionSubtitle>{SECTION_TITLES.FOUNDATION_EXPERIENCES}</SectionSubtitle>
      {foundationExperiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} isMajor={false} />
      ))}
    </Paper>
  );
};
