import { Experience } from '../../core/types/cv.types';
import styles from './ExperienceItem.module.css';

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const { position, company, client, sector, startDate, endDate, location, achievements, technologies } =
    experience;

  return (
    <article className={styles.item}>
      <div className={styles.head}>
        <h3 className={styles.position}>{position}</h3>
        <p className={styles.dates}>
          <time>{startDate}</time> – <time>{endDate}</time>
        </p>
      </div>
      <p className={styles.company}>
        <strong>{company}</strong>
        {client && <> · client {client}</>}
        {sector && <span className={styles.location}> ({sector})</span>}
        {location && <span className={styles.location}> · {location}</span>}
      </p>
      <ul className={styles.achievements}>
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
      <ul className={styles.stack} aria-label="Technologies">
        {technologies.map((tech) => (
          <li key={tech} className={styles.tag}>
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
};
