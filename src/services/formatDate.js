export const formatDate = (tripDate) => {
  if (!tripDate) {
    return '';
  }

  const day = tripDate.getDate().toString().padStart(2, '0');
  const month = (tripDate.getMonth() + 1).toString().padStart(2, '0');
  const year = (tripDate.getFullYear().toString());
  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
};