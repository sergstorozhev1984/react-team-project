import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { userRefreshThunk } from 'redux/auth/authThunk';
import { Layout } from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivatRouter';
import PublicRoute from './PublicRoute/PublicRouter';

export const App = () => {
  const dispatch = useDispatch();
  const sid = useSelector(state => state.auth.sid);
  useEffect(() => {
    if (sid) dispatch(userRefreshThunk(sid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>main</p>} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/calculator" element={<p>calculator</p>} />
          <Route path="/diary" element={<p>diary</p>} />
          <Route path="/main" element={<p>main</p>} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
