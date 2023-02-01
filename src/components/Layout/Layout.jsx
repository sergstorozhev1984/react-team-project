import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css'

export const Layout = () => {
  const token  = useSelector(state => state.auth.token);
  // console.log(token);
  const layoutStyles = token ?css.bgDesktopWithoutBg  : css.bgDesktop;
  
  return (
    <div className={layoutStyles}>
      <Header />
      {/* <Suspense fallback={null}> */}
      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};
