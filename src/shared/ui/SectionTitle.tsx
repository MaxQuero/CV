import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  id: string;
  children: string;
}

export const SectionTitle = ({ id, children }: SectionTitleProps) => (
  <h2 id={id} className={styles.title}>
    {children}
  </h2>
);
