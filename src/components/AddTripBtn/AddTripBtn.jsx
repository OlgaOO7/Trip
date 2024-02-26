import Sprite from '../../images/sprite.svg';

import css from './AddTripBtn.module.css';

export const AddTripBtn = () => {
  return (
    <div>
      <button type="button" className={css.button}>
        <svg className={css.icon}>
          <use href={`${Sprite}#icon-plus`} />
        </svg>
        Add trip
      </button>
    </div>
  );
};
