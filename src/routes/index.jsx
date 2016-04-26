import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './layouts/App.jsx';
import Home from './home/index.jsx';
import About from './about/index.jsx';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
  </Route>
);

export default routes;
