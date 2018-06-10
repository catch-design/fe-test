import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../components/LandingPage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route component={LandingPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
