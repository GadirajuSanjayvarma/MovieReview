import React from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import Aboutme from "./components/Aboutme";
import SkeletonLoading from "./components/SkeletonLoading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contactus from "./components/contactus";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import Authorization from './components/Authorization';
const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/aboutus" component={Aboutme} />
            <Route path="/contact" component={Contactus} />
            <Route path="/authorization" component={Authorization} />
          </Switch>
        </Router>
      
    </Provider>
  );
}

export default App;
