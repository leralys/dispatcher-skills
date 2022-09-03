import { format } from 'date-fns';
import formatISO from 'date-fns/formatISO';

// returns date in format 'Friday Jun 25, 2021'
export const formatArticleDate = (date: string) => {
  return format(new Date(date), 'EEEE LLL d, yyyy');
};

// returns a date in ISO 8601 format (e.g. 2022-06-01)
export const formatToISO = (date: Date) => {
  return formatISO(date).slice(0, 10);
};

export const formatAreaChartDate = (date: string) => {
  return format(new Date(date), 'dd/MM');
};
