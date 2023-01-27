import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <div>
      <header>
        <nav>
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

          <NavLink to="/diary">Diary</NavLink>
          <NavLink to="/calculator">Calculator</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
