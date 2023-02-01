import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './MobileTabletMenu.module.css';

function MobileTabletMenu() {
  const token = useSelector(state => state.auth.token);

  return (
    <>
      {token && (
        <div className={css.menu}>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.NavLinkActive : css.NavLink
            }
            to="/diary"
          >
            Diary
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.NavLinkActive : css.NavLink
            }
            to="/calculator"
          >
            Calculator
          </NavLink>
        </div>
      )}
    </>
  );
}

export default MobileTabletMenu;
