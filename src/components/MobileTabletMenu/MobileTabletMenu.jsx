import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Container } from 'components/Container/Container';

import css from './MobileTabletMenu.module.css';

const modalRoot = document.querySelector('#modal-root');

function MobileTabletMenu({ closeMenu }) {
  const token = useSelector(state => state.auth?.token);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    console.log(e);
    if (e.code === 'Escape') {
      closeMenu();
    }
  };

  return createPortal(
    <>
      {token && (
        <Container>
          <div className={css.menu}>
            <NavLink className={css.navLink} to="/diary">
              Diary
            </NavLink>
            <NavLink className={css.navLink} to="/calculator">
              Calculator
            </NavLink>
          </div>
        </Container>
      )}
    </>,
    modalRoot
  );
}

MobileTabletMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default MobileTabletMenu;
