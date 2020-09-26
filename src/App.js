import React from "react";
import "./App.css";

import Home from './components/Home';
import Search from "./components/Search";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {

  return (
    <div >
      <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
