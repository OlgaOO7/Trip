export const formatDate = (tripDate, format = 'default') => {
  if (!tripDate) {
    return '';
  }

  const dateObj = new Date(tripDate);

  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = (dateObj.getFullYear().toString());

  if (format === 'api') {
    return `${year}-${month}-${day}`;
  }

  return `${day}.${month}.${year}`;
};