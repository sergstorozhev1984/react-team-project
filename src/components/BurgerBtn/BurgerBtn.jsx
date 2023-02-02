import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';

import css from './BurgerBtn.module.css';

export const BurgerBtn = ({ onClick, isMenuOpen }) => {
  return (
    <button className={css.burgerMenuBtn} onClick={onClick} type="button">
      {isMenuOpen ? <GrClose size="24px" /> : <RxHamburgerMenu size="24px" />}
    </button>
  );
};
