import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import Sprite from '../../images/sprite.svg';

import css from './Modal.module.css';

export const Modal = ({ closeModal }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleBackdropClick = useCallback(
    e => {
      if (e.currentTarget === e.target) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <div onClick={handleBackdropClick} className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.headerWrapp}>
          <p>Create trip</p>
          <button type="button" onClick={closeModal} className={css.button}>
            <svg className={css.icon}>
              <use href={`${Sprite}#icon-cross`} />
            </svg>
          </button>
        </div>
        <div></div>
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};
