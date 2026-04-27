import { SectionTitle } from '../../../shared/ui/molecules/SectionTitle/SectionTitle';
import { SectionWrapper } from '../../../shared/ui/molecules/SectionWrapper/SectionWrapper';
import { SkillGroup } from '../SkillGroup/SkillGroup';
import { SECTION_TITLES } from '../../../utils/constants';

interface SkillsSectionProps {
  skills: { category: string; items: string[] }[];
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <SectionWrapper>
      <SectionTitle>{SECTION_TITLES.SKILLS}</SectionTitle>
      {skills.map((skillGroup, index) => (
        <SkillGroup key={index} category={skillGroup.category} items={skillGroup.items} />
      ))}
    </SectionWrapper>
  );
};

