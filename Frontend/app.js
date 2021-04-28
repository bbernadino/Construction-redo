import React from "react";
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import login from "./pages/login";
import machinePage from './pages/machines';

const App = () => {
  return (
    // todo: get routing done
    <>
      <GlobalStyle />
      <Switch>
        <Route path='/login' component={machinePage} />
        <Route path='/' component={login} />
      </Switch>
    </>
  );
};

export default App;
