import React, { Suspense } from 'react';
import './App.module.scss';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout';
import { useDispatch } from 'react-redux';
import { checkToken } from 'features/authSlice';

const Webdev = React.lazy(() => import('./containers/Webdev'));
const Trending = React.lazy(() => import('./containers/Trending'));
const Auth = React.lazy(() => import('./containers/Auth'));

function App() {
  const dispatch = useDispatch();
  dispatch(checkToken());
  
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/web-dev" component={Webdev} />
          <Route path="/account" component={Auth} />
          <Route path="/" component={Trending} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
