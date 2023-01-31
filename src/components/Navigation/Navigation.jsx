import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/authThunk';
import { RxHamburgerMenu } from 'react-icons/rx';
import css from './Navigation.module.css';

function Navigation() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const userNickName = useSelector(state => state.auth?.user?.username);
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
          <div className={css.authNavLinks}>
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
          <div className={css.userMenu}>
            {/**open DIARY CALCULATOR */}
            <button
              className={css.mobileBurgerMenu}
              // onClick={}
              type="button"
            >
              <RxHamburgerMenu size="24px" className={css.burgerMenuLogo} />
            </button>
            <div className={css.nickExitDiv}>
              <p className={css.nickName}> {userNickName} </p>
              <span className={css.verticalLine}></span>
              <button
                className={css.exitBtn}
                type="button"
                onClick={() => dispatch(logOutThunk())}
              >
                Exit
              </button>
            </div>
            {/**open DIARY CALCULATOR */}
            <button
              className={css.tabletBurgerMenu}
              // onClick={}
              type="button"
            >
              <RxHamburgerMenu size="24px" className={css.burgerMenuLogo} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
