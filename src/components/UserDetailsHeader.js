import React, { Component } from "react";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";

class UserDetailsHeader extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-header">
            <img
              src={this.props.user.avatar_url}
              className="mr-2 rounded-circle"
              width="40"
            />
            <Link exact to={`/user/${this.props.user.login}`}>
              {this.props.user.login}
            </Link>{" "}
            /{" "}
            <Link
              exact
              to={`/user/${this.props.user.login}/${this.props.match.params.repo}`}
            >
              {this.props.match.params.repo}
            </Link>
            <a href="#" onClick={this.props.history.goBack}>
              <i className="fas fa-arrow-left fa-2x float-right 	"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetailsHeader;
