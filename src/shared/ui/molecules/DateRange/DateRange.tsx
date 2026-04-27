import { Typography } from '@mui/material';

interface DateRangeProps {
  startDate: string;
  endDate: string;
}

export const DateRange = ({ startDate, endDate }: DateRangeProps) => {
  return <Typography variant="body2" color="text.secondary">{startDate} – {endDate}</Typography>;
};

