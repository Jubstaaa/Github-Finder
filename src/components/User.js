import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "9998250",
      name: "İlker Balcılar",
      login: "Jubstaaa",
      avatar_url: "https://avatars.githubusercontent.com/u/9998250?v=4",
      html_url: "https://github.com/Jubstaaa",
      followers: 0,
      blog: "winniesoft.com",
    };
  }
  render() {
    const { login, id, avatar_url, html_url } = this.props.user;

    return (
      <>
        <div className="col-md-4 col-sm-6 col-lg-3">
          <div className="card mt-2">
            <img src={avatar_url} className="img-fluid" />
            <div className="card-body">
              <h5 className="card-title">{login}</h5>
              <Link to={`/user/${login}`} className="btn btn-primary btn-sm">
                Go Profile
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default User;
