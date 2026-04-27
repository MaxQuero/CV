import { Box, BoxProps } from '@mui/material';
import styles from './SpacingBox.module.css';

interface SpacingBoxProps extends BoxProps {
  children: React.ReactNode;
  spacing?: 'sm' | 'md' | 'lg';
}

const spacingClassMap = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
} as const;

export const SpacingBox = ({ children, spacing = 'md', className, sx, ...props }: SpacingBoxProps) => {
  const rootClass = spacingClassMap[spacing];
  return (
    <Box className={[rootClass, className].filter(Boolean).join(' ')} sx={sx} {...props}>
      {children}
    </Box>
  );
};

