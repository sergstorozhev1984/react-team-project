import logoMobile from 'images/logo/logoMobile.png';
import logoTablet from 'images/logo/logoTablet.png';
import logoDesktop from 'images/logo/logoDesktop.png';
import css from './Logo.module.css';

export const Logo = () => {
  return (
    <>
      <img className={css.logoMobile} src={logoMobile} alt="logo" />
      <img className={css.logoTablet} src={logoTablet} alt="logo" />
      <img className={css.logoDesktop} src={logoDesktop} alt="logo" />
    </>
  );
};
