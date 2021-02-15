import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/header';
import Home from './components/home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Home/>
        </Route>
        {/* <Route path='/404' component={PageNotFound} />
        <Redirect from='*' to='/404' /> */}
      </Switch>
    </Router>
  );
}

export default App;
