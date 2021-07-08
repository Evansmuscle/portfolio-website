import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Greeting from '../Greeting';
import Portfolio from '../Portfolio';

interface AppProps {
  // location: Location;
}

const App: React.FC<AppProps> = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Greeting />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
    </Switch>
  );
};

export default App;
