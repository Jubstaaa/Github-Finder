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
    this.props.getLanguageDetails(
      this.props.match.params.login,
      this.props.match.params.repo
    );
  }

  percentCalc(val) {
    let values = Object.values(this.props.languages);
    let total = 0;

    for (let i of values) {
      total += i;
    }
    return ((val * 100) / total).toFixed(2);
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
            match={this.props.match}
          />
          <div className="container">
            <ul className="list-group">
              <li className="list-group-item text-left ">
                {Object.entries(this.props.languages).map(
                  ([key, val] = entry) => {
                    return (
                      <span className="mx-2 badge badge-primary">
                        {key}
                        {`(%${this.percentCalc(val)})`}
                      </span>
                    );
                  }
                )}
              </li>
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
