import React, { Component } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import axios from "axios";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(`https://api.github.com/users/Jubstaaa`)
      .then((res) => this.setState({ user: res.data, loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      return (
        <>
          <div className="col-12 col-sm-6 m-auto ">
            <div className="card mt-2">
              <div className="card-header">
                <h1 className="text-center">Github Finder v.1</h1>
              </div>

              <div className="card-body row">
                <div className="col-12 col-sm-6">
                  <img src={this.state.user.avatar_url} className="img-fluid" />
                </div>
                <div className="col-12 col-sm-6">
                  <h5 className="card-title">{this.state.user.login}</h5>
                  <Link
                    to={`/user/${this.state.user.login}`}
                    className="btn btn-primary btn-sm"
                  >
                    Go Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default About;
