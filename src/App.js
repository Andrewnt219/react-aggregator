import React, { Suspense } from 'react';
import './App.module.scss';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout';
import { useDispatch } from 'react-redux';
import { checkToken } from 'features/authSlice';
import ProtectedRoute from 'components/Auth/ProtectedRoute/ProtectedRoute';

const Webdev = React.lazy(() => import('./containers/Webdev/Webdev'));
const Trending = React.lazy(() => import('./containers/Trending/Trending'));
const Auth = React.lazy(() => import('./containers/Auth/Auth'));
const User = React.lazy(() => import('./containers/User/User'));
const Empty = React.lazy(() => import('./containers/Empty/Empty'));


function App() {
  const dispatch = useDispatch();
  dispatch(checkToken());

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>

        <Switch>
          <ProtectedRoute path="/me" component={User} />
          <Route path="/web-dev" component={Webdev} />
          <Route path="/account" component={Auth} />
          <Route path="/" exact component={Trending} />
          <Route component={Empty} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
