import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { __DEBUG__ } from 'src/config/constants';
import Home from 'src/pages/Home';
import NotFound from 'src/pages/NotFound';
import Debug from 'src/components/Debug';

const App = () => {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route strict exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {__DEBUG__ && <Debug />}
    </div>
  );
};

export default App;
