import React, { Component } from "react";
import UserDetailsHeader from "./UserDetailsHeader";

class FileDetails extends Component {
  componentDidMount() {
    this.props.getFileDetails(
      this.props.match.params.login,
      this.props.match.params.repo,
      this.props.match.params.branch,
      this.props.match.params.file
    );
  }
  render() {
    return (
      <>
        <UserDetailsHeader
          user={this.props.user}
          history={this.props.history}
        />
        <div className="container">
          <div className="card overflow-auto" style={{ maxHeight: "100vh" }}>
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {typeof this.props.fileDetails.data !== "object"
                ? this.props.fileDetails.data
                : JSON.stringify(this.props.fileDetails.data)}
            </pre>
          </div>
        </div>
      </>
    );
  }
}

export default FileDetails;
