import { useState } from 'react';
import { nanoid } from 'nanoid';

import citiesData from '../../data/mockData.json';
import { getTripDates } from '../../services/getTripDates';

import css from './TripForm.module.css';

export const TripForm = ({ closeModal, addNewTrip, trips }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [message, setMessage] = useState(false);

  const now = new Date();
  const fifteenDays = new Date().setDate(now.getDate() + 15);

  const handleCityChange = e => {
    const citySelected = e.target.value;
    const foundCity = citiesData.find(city => city.name === citySelected);
    console.log('foundCity', foundCity);
    if (foundCity) {
      setSelectedCity(citySelected);
      setMessage(false);
    }
  };

  const handleStartDateChange = e => {
    const start = e.target.value;
    setStartDate(start);
    setMessage(false);
  };

  const handleEndDateChange = e => {
    const end = e.target.value;
    setEndDate(end);
    setMessage(false);
  };

  const handleSubmiTrip = e => {
    e.preventDefault();
    if (!selectedCity || !endDate || !startDate || endDate < startDate) {
      setMessage(true);
      return;
    }
    setMessage(false);
    const cityDetails = citiesData.find(city => city.name === selectedCity);
    const newTrip = {
      _id: nanoid(),
      name: cityDetails?.name,
      imageUrl: cityDetails?.imageUrl,
      start: startDate,
      end: endDate,
    };
    addNewTrip(newTrip);
    const updatedTrips = [...trips, newTrip];
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
    closeModal();
  };

  const handleResetTrip = () => {
    setSelectedCity('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className={css.formWrapper}>
      <form onSubmit={handleSubmiTrip}>
        <label className={css.label}>City</label>
        <select
          name="city"
          id="selectedCity"
          value={selectedCity}
          onChange={handleCityChange}
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
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
          className={css.formSelect}
        >
          <option value="" disabled hidden>
            Select date
          </option>
          {getTripDates(now, fifteenDays).map(date => (
            <option
              key={date.getTime()}
              value={date.toISOString().split('T')[0]}
            >
              {date.toLocaleDateString()}
            </option>
          ))}
        </select>

        <label className={css.label}>End date</label>
        <select
          name="end-date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
          className={css.formSelect}
        >
          <option value="" disabled hidden>
            Select date
          </option>
          {getTripDates(now, fifteenDays).map(date => (
            <option
              key={date.getTime()}
              value={date.toISOString().split('T')[0]}
              disabled={date < new Date(startDate)}
            >
              {date.toLocaleDateString()}
            </option>
          ))}
        </select>

        {message && (
          <p>
            Please check if city, start date and end date of trip are correctly
            chosen
          </p>
        )}

        <button
          type="button"
          className={css.cancelBtn}
          onClick={handleResetTrip}
        >
          Cancel
        </button>
        <button type="submit" className={css.saveBtn}>
          Save
        </button>
      </form>
    </div>
  );
};
