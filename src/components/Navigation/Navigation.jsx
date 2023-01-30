import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/authThunk';
import css from './Navigation.module.css';

function Navigation() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  return (
    <div>
      <header>
        <nav>
          {!token ? (
            <>
              {' '}
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
            </>
          ) : (
            <>
              <NavLink to="/diary">Diary</NavLink>
              <NavLink to="/calculator">Calculator</NavLink>
              <button type="button" onClick={() => dispatch(logOutThunk())}>
                Exit
              </button>
            </>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
