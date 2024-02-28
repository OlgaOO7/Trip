import { daysOfWeek } from '../data/daysOfweek';

export const getDayofWeek = (date) => {
  const currentDate = new Date(date);
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
}