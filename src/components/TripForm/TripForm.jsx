import citiesData from '../../data/mockData.json';

import css from './TripForm.module.css';

export const TripForm = () => {
  return (
    <div className={css.formWrapper}>
      <form>
        <label className={css.label}>City</label>
        <select
          name="city"
          id="city-select"
          defaultValue=""
          className={css.formSelect}
        >
          <option value="" disabled hidden>
            Please select a city
          </option>
          {citiesData.map(city => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        <label className={css.label}>Start date</label>
        <select
          name="start-date"
          id="sart-date-select"
          defaultValue=""
          className={css.formSelect}
        >
          <option value="" disabled hidden>
            Select date
          </option>
        </select>

        <label className={css.label}>End date</label>
        <select
          name="end-date"
          id="end-date-select"
          defaultValue=""
          className={css.formSelect}
        >
          <option value="" disabled hidden>
            Select date
          </option>
        </select>
        <button type="reset" className={css.cancelBtn}>
          Cancel
        </button>
        <button type="submit" className={css.saveBtn}>
          Save
        </button>
      </form>
    </div>
  );
};
