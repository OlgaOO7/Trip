import css from './TripSearch.module.css';

import Sprite from '../../../images/sprite.svg';

export const TripSearch = ({ search, onSearch }) => {
  const hadleSubmitSearch = e => {
    e.preventDefault();
  };

  return (
    <div className={css.wrapper}>
      <form className={css.searchForm} onSubmit={hadleSubmitSearch}>
        <button type="submit" className={css.searchBtn}>
          <svg className={css.icon}>
            <use href={`${Sprite}#icon-search`} />
          </svg>
        </button>
        <input
          type="text"
          name="search"
          value={search}
          autoComplete="off"
          autoFocus
          placeholder="Search you trip"
          onChange={onSearch}
          className={css.input}
        />
      </form>
    </div>
  );
};
