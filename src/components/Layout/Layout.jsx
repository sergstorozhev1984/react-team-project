import Header from 'components/Header/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css'

export const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const layoutStyles = isLoggedIn ?css.bgDesktopWithoutBg  : css.bgDesktop;
  
  return (
    <div className={layoutStyles}>
      <Header />
      <Outlet />
    </div>
  );
};
