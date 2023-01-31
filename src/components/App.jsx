import CalculatorPage from 'pages/CalculatorPage/CalculatorPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import MainPage from 'pages/MainPage/MainPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { userRefreshThunk } from 'redux/auth/authThunk';
import { Layout } from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivatRouter';
import PublicRoute from './PublicRoute/PublicRouter';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const sid = useSelector(state => state.auth.sid);
  const isLoading = useSelector(state => state.auth.isLoading);
  useEffect(() => {
    if (sid) dispatch(userRefreshThunk(sid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/diary" element={<p>diary</p>} />
            <Route path="/main" element={<MainPage />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
