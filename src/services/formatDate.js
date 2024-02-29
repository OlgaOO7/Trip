export const formatDate = (tripDate) => {
  if (!tripDate) {
    return '';
  }

  const dateObj = new Date(tripDate);

  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = (dateObj.getFullYear().toString());
  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
};