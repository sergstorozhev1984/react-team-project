import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { GrClose } from 'react-icons/gr';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const navigate = useNavigate();

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  const handleClick = () => {
    closeModal();
  };

  const handleLoginClick = () => {
    navigate('/login', { replace: true });
  };

  return createPortal(
    <div className={css.Backdrop} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <button type="button" className={css.Close} onClick={handleClick}>
          <GrClose />
        </button>
        <DailyCalorieIntake />
        <button className={css.button} type="button" onClick={handleLoginClick}>
          Start losing weight
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.protoTypes = {
  handleBackdropClick: PropTypes.func,
  handleClick: PropTypes.func,
  handleLoginClick: PropTypes.func,
};
