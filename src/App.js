import React from 'react';
import './App.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Webdev from './containers/Webdev'
import Trending from './containers/Trending'
import Layout from './hoc/Layout';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/news" component={Webdev} />
        <Route path="/" component={Trending} />
      </Switch>
    </Layout>
  );
}

export default App;
