import { Typography } from '@mui/material';
import { Person } from '@mui/icons-material';
import styles from './ProfilePhoto.module.css';

export interface ProfilePhotoProps {
  photoUrl?: string;
  nameForAlt: string;
}

export const ProfilePhoto = ({ photoUrl, nameForAlt }: ProfilePhotoProps) => {
  return (
    <div className={styles.frame}>
      <span className={styles.stamp} aria-hidden />
      {photoUrl ? (
        <img className={styles.image} src={photoUrl} alt={nameForAlt} />
      ) : (
        <div className={styles.placeholder}>
          <Person className={styles.placeholderIcon} sx={{ fontSize: 32 }} aria-hidden />
          <Typography component="span" className={styles.hint} variant="caption" color="textSecondary">
            Votre photo
          </Typography>
        </div>
      )}
    </div>
  );
};
