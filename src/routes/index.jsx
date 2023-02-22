import {
  BrowserRouter,
  Route,
  Routes as RoutesWrapper,
} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" exact element={<Home />} />
      <Route path="/sign-in" element={<Login />} />
    </RoutesWrapper>
  );
}

export default Routes;
