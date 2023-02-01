import { useSelector, useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/auth/authThunk';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const userNickName = useSelector(state => state.auth?.user?.username);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const userMenuStyles = isLoggedIn ? css.userMenuBgc:css.userMenu;

  return (
    <div className={userMenuStyles}>
      <p className={css.nickName}>{userNickName}</p>
      <span className={css.verticalLine}></span>
      <button
        className={css.exitBtn}
        type="button"
        onClick={() => dispatch(logOutThunk())}
      >
        Exit
      </button>
    </div>
  );
};
