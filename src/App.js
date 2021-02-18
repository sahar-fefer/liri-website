import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/header';
import Home from './components/home';
import { Contents } from './components/contents';
import { Recommendations } from './components/recommendations';
import { Contact } from './components/contact';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Home />
          <Recommendations />
          <Contents />
          <Contact />
        </Route>
        {/* <Route path='/404' component={PageNotFound} />
        <Redirect from='*' to='/404' /> */}
      </Switch>
    </Router>
  );
}

export default App;
