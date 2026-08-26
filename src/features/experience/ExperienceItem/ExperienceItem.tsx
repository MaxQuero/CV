import { Typography, Card, CardContent, Stack } from '@mui/material';
import { MajorExperience, FoundationExperience } from '../../../core/types/cv.types';
import { DateRange } from '../../../shared/ui/molecules/DateRange/DateRange';
import { STARSection } from '../STARSection/STARSection';
import { HoverablePaper } from '../../../shared/ui/molecules/HoverablePaper/HoverablePaper';
import { SeparatorDot } from '../../../shared/ui/atoms/SeparatorDot/SeparatorDot';
import { ChipList } from '../../../shared/ui/molecules/ChipList/ChipList';
import { SpacingBox } from '../../../shared/ui/atoms/SpacingBox/SpacingBox';
import styles from './ExperienceItem.module.css';

interface ExperienceItemProps {
  experience: MajorExperience | FoundationExperience;
  isMajor: boolean;
}

export const ExperienceItem = ({ experience, isMajor }: ExperienceItemProps) => {
  if (isMajor && experience.type === 'major') {
    return (
      <Card elevation={0} className={['card-liseret', styles.card].join(' ')}>
        <CardContent className={styles.cardContent}>
          <SpacingBox spacing="xs">
            <Typography variant="h5" className={styles.position}>
              {experience.position}
            </Typography>
            <Stack direction="row" spacing={1.5} alignItems="center" className={styles.meta}>
              <Typography variant="body1" color="primary" className="font-semibold">
                {experience.company}
              </Typography>
              <SeparatorDot />
              <DateRange startDate={experience.startDate} endDate={experience.endDate} />
            </Stack>
          </SpacingBox>
          <STARSection
            situation={experience.star.situation}
            task={experience.star.task}
            action={experience.star.action}
            result={experience.star.result}
          />
          {experience.technologies && experience.technologies.length > 0 && (
            <>
              <ChipList className={styles.chipList} items={experience.technologies} />
            </>
          )}
        </CardContent>
      </Card>
    );
  }

  if (!isMajor && experience.type === 'foundation') {
    return (
      <HoverablePaper className={styles.foundationPaper}>
        <Typography variant="body2" className={styles.foundationBody}>
          <Typography component="span" color="primary" className={styles.period}>
            {experience.period}
          </Typography>
          {' • '}
          <Typography component="span" className={styles.company}>
            {experience.company}
          </Typography>
          {' • '}
          <Typography component="span" color="text.secondary">
            {experience.position}
          </Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary" className={styles.foundationDescription}>
          {experience.description}
        </Typography>
        {experience.technologies && experience.technologies.length > 0 && (
          <>
            <ChipList
              items={experience.technologies}
              spacing={0.75}
              className={styles.foundationTechChips}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              className={styles.foundationTechInline}
            >
              {experience.technologies.join(' · ')}
            </Typography>
          </>
        )}
      </HoverablePaper>
    );
  }

  return null;
};
