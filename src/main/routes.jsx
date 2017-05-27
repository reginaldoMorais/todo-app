import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Todo from '../todo/todo';
import About from '../about/about';

export default props => (
  <Switch>
    <Route exact path="/" component={Todo} />
    <Route path='/about' component={About} />
    <Route path="*" component={Todo} />
  </Switch>
);
