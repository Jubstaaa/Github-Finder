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
              {Object.keys(this.props.languages).length > 0 && (
                <li className="list-group-item text-left ">
                  <div className="progress">
                    {Object.entries(this.props.languages).map(
                      ([key, val] = entry) => {
                        return (
                          <div
                            key={key}
                            className="progress-bar"
                            style={{
                              width: `${this.percentCalc(val)}%`,
                              backgroundColor: `${this.props.colors[key].color}`,
                            }}
                          >
                            {console.log(key)}
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div>
                    {Object.entries(this.props.languages).map(
                      ([key, val] = entry) => {
                        return (
                          <div key={key}>
                            <svg height="10" width="10">
                              <circle
                                cx="5"
                                cy="5"
                                r="5"
                                fill={`${this.props.colors[key].color}`}
                              />
                            </svg>

                            <span className=" badge ">
                              {key}
                              <span className="mx-1  font-weight-light">{`(%${this.percentCalc(
                                val
                              )})`}</span>
                            </span>
                          </div>
                        );
                      }
                    )}
                  </div>
                </li>
              )}

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
