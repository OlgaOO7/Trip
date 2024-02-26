import { nanoid } from 'nanoid';

const currentDate = new Date();
const start = new Date(currentDate.setDate(currentDate.getDate() + 5));
const end = new Date(currentDate.setDate(currentDate.getDate() + 10));

export const tripByDefault = {
  _id: nanoid(),
  name: "London",
  imageUrl: "https://res.cloudinary.com/dflab01qc/image/upload/v1708876421/London_ebamtg.jpg",
  start: start,
  end: end,
};