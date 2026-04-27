import { Stack } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, GitHub, Language } from '@mui/icons-material';
import { ContactLink } from '../../../shared/ui/molecules/ContactLink/ContactLink';
import { ContactItem } from '../../../shared/ui/molecules/ContactItem/ContactItem';

interface ContactInfoProps {
  email: string;
  phone?: string;
  location?: string;
  linkedIn?: string;
  github?: string;
  website?: string;
}

export const ContactInfo = ({ email, phone, location, linkedIn, github, website }: ContactInfoProps) => {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      <ContactLink href={`mailto:${email}`} icon={<Email fontSize="small" />}>
        {email}
      </ContactLink>
      {phone && <ContactItem icon={<Phone fontSize="small" color="action" />}>{phone}</ContactItem>}
      {location && <ContactItem icon={<LocationOn fontSize="small" color="action" />}>{location}</ContactItem>}
      {linkedIn && (
        <ContactLink href={linkedIn} icon={<LinkedIn fontSize="small" />} external>
          LinkedIn
        </ContactLink>
      )}
      {github && (
        <ContactLink href={github} icon={<GitHub fontSize="small" />} external>
          GitHub
        </ContactLink>
      )}
      {website && (
        <ContactLink href={website} icon={<Language fontSize="small" />} external>
          Website
        </ContactLink>
      )}
    </Stack>
  );
};

