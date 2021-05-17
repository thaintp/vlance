import "App.scss";

import { Router, Switch, Route, Redirect } from "react-router-dom";
import {
  Home,
  Jobs,
  JobDetail,
  JobManager,
  PostJob,
  Profile,
  EditProfile,
  ChangePassword,
  JobConversation,
} from "pages";
import { TopBar, NavBar } from "components";
import { history } from "./helpers/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div className="not-fluid">
          <TopBar></TopBar>
        </div>
        <hr />
        <div className="not-fluid">
          <NavBar></NavBar>
        </div>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/jobs">
            <Jobs></Jobs>
          </Route>
          <Route path="/conversation/:id" component={JobConversation} />

          <Route path="/job-manager/:role">
            <JobManager></JobManager>
          </Route>
          <Route path="/jobs/:id" component={JobDetail} />

          <Route path="/postjob">
            <PostJob></PostJob>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <Route exact path="/users">
          <ListFreelancer></ListFreelancer>
          </Route>
          <Route path="/users/:id">
            <Profile></Profile>
          </Route>
          <Route path="/edit-profile">
            <EditProfile></EditProfile>
          </Route>
          <Route path="/change-password">
            <ChangePassword></ChangePassword>
          </Route>
          <Route path="/job2">
            <Job2></Job2>
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
