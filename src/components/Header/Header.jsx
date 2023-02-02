import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { BurgerBtn } from 'components/BurgerBtn/BurgerBtn';
import MobileTabletMenu from 'components/MobileTabletMenu/MobileTabletMenu';

import css from './Header.module.css';

function Header() {
  const token = useSelector(state => state.auth?.token);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const linkTo = token ? '/diary' : '/login';

  const handleOpenMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    if (!location?.pathname) return;
    setIsMenuOpen(false);
  }, [location?.pathname]);

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
        {token && (
          <BurgerBtn onClick={handleOpenMenu} isMenuOpen={isMenuOpen} />
        )}
      </header>
      {isMenuOpen && <MobileTabletMenu closeMenu={handleOpenMenu} />}
      {token && (
        <div className={css.mobileUserMenuDiv}>
          <UserMenu />
        </div>
      )}
    </Container>
  );
}

export default Header;
