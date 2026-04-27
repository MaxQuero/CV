import { Box, BoxProps } from '@mui/material';
import styles from './SectionWrapper.module.css';

interface SectionWrapperProps extends BoxProps {
  children: React.ReactNode;
  spacing?: 'normal' | 'large';
}

export const SectionWrapper = ({ children, spacing = 'normal', className, sx, ...props }: SectionWrapperProps) => {
  const rootClass = spacing === 'large' ? styles.rootLarge : styles.root;
  return (
    <Box className={[rootClass, className].filter(Boolean).join(' ')} sx={sx} {...props}>
      {children}
    </Box>
  );
};

