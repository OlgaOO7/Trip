import citiesData from "../../../data/mockData.json";
import { TripItem } from "../TripItem/TripItem";

export const TripList = () => {
  const cities = citiesData || [];
  console.log("cities:", cities);
  return (
    <ul>
      {cities.map((city) => (
        <li key={city.id}>
          <TripItem city={city} />
        </li>
      ))}
    </ul>
  );
};
