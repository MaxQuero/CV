export const formatDateRange = (startDate: string, endDate: string): string => {
  if (endDate === 'Présent' || endDate === 'Present') {
    return `${startDate} – ${endDate}`;
  }
  return `${startDate} – ${endDate}`;
};

