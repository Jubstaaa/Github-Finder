import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Users from "./Users";
import Alert from "./Alert";
import About from "./About";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import UserDetails from "./UserDetails";
import RepoDetails from "./RepoDetails";
import FileDetails from "./FileDetails";
import PageNotFound from "./PageNotFound";
import GithubState from "../context/githubState";
import GithubContext from "../context/githubContext";

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Alert />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <Search />
                <Users />
              </>
            )}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/:login" component={UserDetails} />
          <Route exact path="/user/:login/:repo" component={RepoDetails} />
          <Route
            exact
            path="/user/:login/:repo/file/:file"
            component={FileDetails}
          />
          <Route
            exact
            path="/user/:login/:repo/dir/:file"
            component={RepoDetails}
          />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
