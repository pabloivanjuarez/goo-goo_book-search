import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import SavedList from './components/SavedList';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <SearchBox />
          </Route>
          <Route exact path='/saved'>
            <SavedList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
