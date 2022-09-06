import React, { Component, useContext, useEffect } from "react";
import UserDetailsHeader from "./UserDetailsHeader";
import GithubContext from "../context/githubContext";

const FileDetails = ({ match, history }) => {
  const { user, getFileDetails, fileDetails } = useContext(GithubContext);

  useEffect(() => {
    getFileDetails(
      match.params.login,
      match.params.repo,
      match.params.branch,
      match.params.file
    );
  }, []);

  return (
    <>
      <UserDetailsHeader user={user} history={history} match={match} />
      <div className="container">
        <div className="card overflow-auto" style={{ maxHeight: "100vh" }}>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {typeof fileDetails.data !== "object"
              ? fileDetails.data
              : JSON.stringify(fileDetails.data)}
          </pre>
        </div>
      </div>
    </>
  );
};

export default FileDetails;
