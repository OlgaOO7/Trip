import { useState } from 'react';

import { Modal } from '../Modal/Modal';

import Sprite from '../../images/sprite.svg';

import css from './AddTripBtn.module.css';

export const AddTripBtn = ({ addNewTrip, trips }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <div className={css.addBtnWrapper}>
      <button type="button" className={css.button} onClick={toggleModal}>
        <svg className={css.icon}>
          <use href={`${Sprite}#icon-plus`} />
        </svg>
        Add trip
      </button>
      {isShowModal && (
        <Modal closeModal={toggleModal} addNewTrip={addNewTrip} trips={trips} />
      )}
    </div>
  );
};
