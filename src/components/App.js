import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Users from "./Users";
import axios from "axios";
import Alert from "./Alert";
import About from "./About";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import UserDetails from "./UserDetails";

export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getUserRepos = this.getUserRepos.bind(this);
    this.state = {
      loading: false,
      users: [],
      user: {},
      repos: [],
      alert: null,
    };
  }

  getUser(username) {
    this.setState({ user: {} });
    this.setState({ loading: true });
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => this.setState({ user: res.data, loading: false }));
  }

  getUserRepos(username) {
    this.setState({ repos: [] });
    this.setState({ loading: true });
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => this.setState({ repos: res.data, loading: false }));
  }

  searchUsers(keyword) {
    this.setState({ users: [] });
    this.setState({ loading: true });
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => {
        this.setState({ users: res.data.items, loading: false });
        if (this.state.users.length <= 0) {
          this.setAlert("No user found", "warning");
        }
      });
  }

  clearUsers() {
    this.setState({ users: [] });
  }

  setAlert(msg, type) {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Alert alert={this.state.alert} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <Search
                  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  users={this.state.users}
                  setAlert={this.setAlert}
                />
                <Users
                  users={this.state.users}
                  loading={this.state.loading}
                  setAlert={this.setAlert}
                />
              </>
            )}
          />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/user/:login"
            render={(props) => (
              <UserDetails
                {...props}
                getUser={this.getUser}
                getUserRepos={this.getUserRepos}
                user={this.state.user}
                repos={this.state.repos}
                loading={this.state.loading}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
