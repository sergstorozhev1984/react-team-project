import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectorToken } from 'redux/selector/selector';

const PrivateRoute = () => {
  const token = useSelector(selectorToken);
  return token ? <Outlet /> : <Navigate to="/diary" />;
};

export default PrivateRoute;
