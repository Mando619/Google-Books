
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Header from './Components/Header';
import Saved from './Components/Saved';
import Search from './Components/Search';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Header></Header>
        </Route>
        <Route path="/saved">
          <Saved></Saved>
        </Route>
        <Route path="/search">
          <Search></Search>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
