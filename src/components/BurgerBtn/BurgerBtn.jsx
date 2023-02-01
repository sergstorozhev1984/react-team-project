import { RxHamburgerMenu } from 'react-icons/rx';
import css from './BurgerBtn.module.css';

export const BurgerBtn = () => {
  return (
    <button
      className={css.burgerMenuBtn}
      // onClick={}
      type="button"
    >
      <RxHamburgerMenu size="24px" className={css.burgerMenuLogo} />
    </button>
  );
};
