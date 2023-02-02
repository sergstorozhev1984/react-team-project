import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

function Navigation() {
  const token = useSelector(state => state.auth?.token);

  return (
    <nav>
      {!token ? (
        <div className={css.nonAuthBox}>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.NavLinkActive : css.NavLink
            }
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.NavLinkActive : css.NavLink
            }
            to="/login"
          >
            Login
          </NavLink>
        </div>
      ) : (
        <div className={css.authBox}>
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
    </nav>
  );
}

export default Navigation;
