import { Paper, PaperProps } from '@mui/material';
import styles from './HoverablePaper.module.css';

interface HoverablePaperProps extends PaperProps {
  children: React.ReactNode;
}

export const HoverablePaper = ({ children, className, sx, ...props }: HoverablePaperProps) => {
  return (
    <Paper
      elevation={0}
      className={[styles.root, className].filter(Boolean).join(' ')}
      sx={[{ bgcolor: 'transparent', backgroundImage: 'none' }, ...(sx ? (Array.isArray(sx) ? sx : [sx]) : [])]}
      {...props}
    >
      {children}
    </Paper>
  );
};

