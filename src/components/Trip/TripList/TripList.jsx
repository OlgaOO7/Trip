import { TripItem } from '../TripItem/TripItem';
import Sprite from '../../../images/sprite.svg';

import css from './TripList.module.css';

export const TripList = ({
  onSelectedTrip,
  trips,
  handleScroll,
  scrollPosition,
  scrollContainerRef,
  isPrevBtnVissible,
  isNextBtnVisible,
}) => {
  const sortTripsByStartDate = trips => {
    return trips.slice().sort((a, b) => new Date(a.start) - new Date(b.start));
  };

  const sortedTrips = sortTripsByStartDate(trips);

  return (
    <div className={css.tripWrapper}>
      <div className={css.btnWrapper}>
        <button
          onClick={() => handleScroll('prev')}
          className={css.scrollBtn}
          disabled={!isPrevBtnVissible}
        >
          <svg className={css.scrollIcon}>
            <use href={`${Sprite}#icon-arrow-left`} />
          </svg>
        </button>
        <button
          onClick={() => handleScroll('next')}
          className={css.scrollBtn}
          disabled={!isNextBtnVisible}
        >
          <svg className={css.scrollIcon}>
            <use href={`${Sprite}#icon-arrow-right`} />
          </svg>
        </button>
      </div>

      <div className={css.tripListContainer} ref={scrollContainerRef}>
        <ul className={css.tripList}>
          {sortedTrips.map(city => (
            <li
              key={city._id}
              onClick={() => {
                onSelectedTrip(city);
              }}
            >
              <TripItem city={city} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
