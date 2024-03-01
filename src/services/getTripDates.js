export const getTripDates = (now, fifteenDays) => {
  const startDate = new Date(now).getTime();
  const endDate = startDate + 15 * 24 * 60 * 60 * 1000;
  const optionDate = [];
  for (
    let date = startDate;
    date <= endDate;
    date += 24 * 60 * 60 * 1000
  ) {
    optionDate.push(new Date(date));
  }
  return optionDate;
};
