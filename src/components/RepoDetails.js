import React, { Component } from "react";
import RepoDetail from "./RepoDetail";
import Loading from "./Loading";
import { BrowserRouter, Link, Route } from "react-router-dom";
import UserDetailsHeader from "./UserDetailsHeader";

class RepoDetails extends Component {
  componentDidMount() {
    this.props.getRepoDetails(
      this.props.match.params.login,
      this.props.match.params.repo
    );
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      return (
        <>
          <UserDetailsHeader
            user={this.props.user}
            history={this.props.history}
          />
          <div className="container">
            <ul className="list-group">
              {this.props.repoDetails.map((repoDetail, index) => (
                <RepoDetail
                  repoDetail={repoDetail}
                  key={index}
                  params={this.props.match.params}
                />
              ))}
            </ul>
          </div>
        </>
      );
    }
  }
}
export default RepoDetails;
