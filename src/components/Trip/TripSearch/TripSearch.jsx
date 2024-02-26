import css from './TripSearch.module.css';

import Sprite from '../../../images/sprite.svg';

export const TripSearch = () => {
  return (
    <div className={css.wrapper}>
      <form className={css.searchForm}>
        <button type="submit" className={css.searchBtn}>
          <svg className={css.icon}>
            <use href={`${Sprite}#icon-search`} />
          </svg>
        </button>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search you trip"
          className={css.input}
        />
      </form>
    </div>
  );
};
