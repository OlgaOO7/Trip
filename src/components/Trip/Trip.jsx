import { TripSearch } from "./TripSearch/TripSearch";
import { TripList } from "./TripList/TripList";

export const Trip = () => {
  return (
    <section>
      <TripSearch />
      <TripList />
    </section>
  );
};
