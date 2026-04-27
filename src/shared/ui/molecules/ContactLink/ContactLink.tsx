import { Link, Typography, Stack } from '@mui/material';
import { ReactNode } from 'react';
import styles from './ContactLink.module.css';

interface ContactLinkProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  external?: boolean;
}

export const ContactLink = ({ href, icon, children, external = false }: ContactLinkProps) => {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      color="primary"
      className={styles.link}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        {icon}
        <Typography variant="body2">{children}</Typography>
      </Stack>
    </Link>
  );
};

