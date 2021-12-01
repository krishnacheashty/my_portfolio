import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
import Contact from "./pages/contactme/Contact";

import Home from './pages/home/Home'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
