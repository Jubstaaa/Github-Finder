import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            <Link to={`/user/${this.props.user.login}`}>
              {this.props.user.login}
            </Link>
            {/* /
            <Link
              to={{
                pathname: `/user/${this.props.user.login}/${this.props.match.params.repo}`,
                state: { url: this.props.history.location.state.url },
              }}
            >
              {this.props.match.params.repo}
            </Link> */}
            {/* <a href="#" onClick={this.props.history.goBack}>
              <i className="fas fa-arrow-left fa-2x float-right 	"></i>
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetailsHeader;
