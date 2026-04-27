import { Paper, PaperProps } from '@mui/material';
import styles from './BorderedPaper.module.css';

interface BorderedPaperProps extends PaperProps {
  children: React.ReactNode;
}

export const BorderedPaper = ({ children, className, ...props }: BorderedPaperProps) => {
  return (
    <Paper
      elevation={0}
      sx={{ bgcolor: 'transparent', backgroundImage: 'none' }}
      className={[styles.root, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Paper>
  );
};

