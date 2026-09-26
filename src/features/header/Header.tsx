import { PersonalInfo } from '../../core/types/cv.types';
import styles from './Header.module.css';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '');

export const Header = ({ personalInfo }: HeaderProps) => {
  const { firstName, lastName, title, highlights, email, phone, location, linkedIn, github } = personalInfo;

  return (
    <header className={styles.header}>
      <div className={styles.identity}>
        <h1 className={styles.name}>
          {firstName} <span className={styles.lastName}>{lastName}</span>
        </h1>
        <p className={styles.title}>{title}</p>
      </div>

      <address className={styles.contact}>
        <ul className={styles.contactList}>
          {location && <li>{location}</li>}
          {phone && (
            <li>
              <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
            </li>
          )}
          <li>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          {linkedIn && (
            <li>
              <a href={linkedIn}>{stripProtocol(linkedIn)}</a>
            </li>
          )}
          {github && (
            <li>
              <a href={github}>{stripProtocol(github)}</a>
            </li>
          )}
        </ul>
      </address>

      <ul className={styles.highlights}>
        {highlights.map((highlight) => (
          <li key={highlight.label} className={styles.highlight}>
            <span className={styles.highlightLabel}>{highlight.label}</span>
            <span className={styles.highlightText}>{highlight.text}</span>
          </li>
        ))}
      </ul>
    </header>
  );
};
