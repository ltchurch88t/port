import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about"></Route>
        <Route path="/users"></Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
