import React, { Component } from "react";
import Loading from "./Loading";
import Repos from "./Repos";

class UserDetails extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  render() {
    const { loading, repos } = this.props;
    const {
      login,
      name,
      avatar_url,
      company,
      email,
      location,
      html_url,
      bio,
      blog,
      followers,
      following,
      public_repos,
      twitter_username,
    } = this.props.user;
    if (loading) {
      return <Loading />;
    } else {
      return (
        <div className="container my-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={avatar_url} className="card-img-top " />

                <div className="card-body">
                  <h2>{name}</h2>
                  <p> {login}</p>
                  {bio && (
                    <>
                      <p>{bio}</p>
                    </>
                  )}
                  {company && (
                    <div>
                      <i className="fas fa-building mr-2  "></i>
                      {company}
                    </div>
                  )}
                  {location && (
                    <div>
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {location}
                    </div>
                  )}
                  {email && (
                    <div>
                      <i className="fas fa-envelope mr-2"></i>
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                  )}
                  {blog && (
                    <div>
                      <i className="fas fa-link mr-2"></i>
                      <a href={`https://www.${blog}`} target="_blank">
                        {blog}
                      </a>
                    </div>
                  )}
                  {twitter_username && (
                    <div>
                      <i className="fab fa-twitter mr-2"></i>
                      <a
                        href={`https://www.twitter.com/${twitter_username}`}
                        target="_blank"
                      >{`@${twitter_username}`}</a>
                    </div>
                  )}
                  <p>
                    <a
                      href={html_url}
                      className="btn btn-block btn-primary btn-sm mt-2"
                      target="_blank"
                    >
                      Github Profile
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <div>
                    <span className="badge badge-primary m-1">
                      Followers: {followers}
                    </span>
                    <span className="badge badge-danger m-1">
                      Following: {following}
                    </span>
                    <span className="badge badge-success m-1">
                      Repos: {public_repos}
                    </span>
                  </div>
                  <div className="row ">
                    <Repos repos={repos} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default UserDetails;
