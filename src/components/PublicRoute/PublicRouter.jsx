import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectorToken } from 'redux/selector/selector';

const PublicRoute = () => {
  const token = useSelector(selectorToken);
  return token ? <Navigate to="/calculator" /> : <Outlet />;
};

export default PublicRoute;
