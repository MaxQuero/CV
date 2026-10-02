import { Project } from '../../core/types/cv.types';
import { SectionTitle } from '../../shared/ui/SectionTitle';
import { SECTION_TITLES } from '../../utils/constants';
import { RichText } from '../../shared/ui/RichText';
import styles from './ExperienceItem.module.css';

interface ProjectSectionProps {
  projects: Project[];
}

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '');

export const ProjectSection = ({ projects }: ProjectSectionProps) => (
  <section aria-labelledby="projects-heading">
    <SectionTitle id="projects-heading">{SECTION_TITLES.PROJECTS}</SectionTitle>
    {projects.map((project) => (
      <article key={project.name} className={styles.item}>
        <div className={styles.head}>
          <h3 className={styles.position}>
            {project.name}
            <span className={styles.location}> · {project.description}</span>
          </h3>
          <p className={styles.dates}>
            <time>{project.period}</time>
            {project.status && <> · {project.status}</>}
          </p>
        </div>
        {project.url && (
          <p className={styles.company}>
            <a href={project.url}>{stripProtocol(project.url)}</a>
          </p>
        )}
        <ul className={styles.achievements}>
          {project.achievements.map((achievement) => (
            <li key={achievement}>
              <RichText text={achievement} />
            </li>
          ))}
        </ul>
        <ul className={styles.stack} aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech} className={styles.tag}>
              {tech}
            </li>
          ))}
        </ul>
      </article>
    ))}
  </section>
);
