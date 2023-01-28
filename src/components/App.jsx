import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import PrivateRoute from './PrivateRoute/PrivateRoute';
// import PublicRoute from './PublicRoute/PublicRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<PrivateRoute />}> */}
        <Route index element={<p>main</p>} />
        <Route path="/calculator" element={<p>calculator</p>} />
        <Route path="/diary" element={<p>diary</p>} />
        <Route path="/main" element={<p>main</p>} />
        {/* </Route> */}
        {/* <Route path="/" element={<PublicRoute />}> */}
        <Route path="/register" element={<p>register</p>} />
        <Route path="/login" element={<p>login</p>} />
        {/* </Route> */}
      </Route>
    </Routes>
  );
};
