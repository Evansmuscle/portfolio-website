import './App.css';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Greeting from '../Greeting';
import Portfolio from '../Portfolio';

interface AppProps {
  // location: Location;
}

const App: React.FC<AppProps> = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Greeting />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default App;
