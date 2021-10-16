import { Route, Redirect } from 'react-router-dom';
import Login from '../components/Login/Login';
import Chat from '../components/Chat/Chat';

export const publicRoutes = () => (
  <>
    <Route path='/' exact component={Login} />
    <Redirect to='/' />
  </>
);
export const privateRoutes = () => (
  <>
    <Route path='/chat' exact component={Chat} />
    <Redirect to='/chat' />
  </>
);
