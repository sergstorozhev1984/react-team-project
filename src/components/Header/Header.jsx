import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { BurgerBtn } from 'components/BurgerBtn/BurgerBtn';
import css from './Header.module.css';

function Header() {
  const token = useSelector(state => state.auth.token);
  const linkTo = token ? '/diary' : '/login';

  return (
    <Container>
      <header className={css.header}>
        <Link to={linkTo}>
          <Logo />
        </Link>
        <span className={css.verticalLine}></span>
        <div className={css.navigationBox}>
          <Navigation />
        </div>
        {token && (
          <div className={css.tabletUserMenuDiv}>
            <UserMenu />
          </div>
        )}
        {token && <BurgerBtn />}
      </header>
      {token && (
        <div className={css.mobileUserMenuDiv}>
          <UserMenu />
        </div>
      )}
    </Container>
  );
}

export default Header;
