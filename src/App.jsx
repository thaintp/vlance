import "App.scss";

import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Home, Jobs } from "pages";
import { TopBar, NavBar } from "components";
import { history } from "./helpers/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <TopBar></TopBar>
        <hr />
        <NavBar></NavBar>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/jobs">
            <Jobs></Jobs>
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
