import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserDetailsHeader extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center ">
              <div className="d-flex ">
                <img
                  src={this.props.user.avatar_url}
                  className="mr-2 rounded-circle"
                  width="48"
                />
                <div>
                  <div className="d-flex ">
                    <Link to={`/user/${this.props.user.login}`}>
                      {this.props.user.login}
                    </Link>
                    &nbsp; / &nbsp;
                    <Link
                      to={{
                        pathname: `/user/${this.props.user.login}/${this.props.match.params.repo}`,
                      }}
                    >
                      {this.props.match.params.repo}
                    </Link>
                  </div>
                  <span className="	d-none d-sm-block">{`https://github.com/${this.props.user.login}/${this.props.match.params.repo}.git`}</span>
                </div>
              </div>
              <a href="#" onClick={this.props.history.goBack}>
                <i className="fas fa-arrow-left fa-2x float-right 	"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetailsHeader;
