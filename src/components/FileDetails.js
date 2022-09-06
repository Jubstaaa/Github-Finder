import React, { Component, useContext, useEffect } from "react";
import Loading from "./Loading";
import UserDetailsHeader from "./UserDetailsHeader";
import GithubContext from "../context/githubContext";

const FileDetails = ({ match, history, location }) => {
  console.log();
  const { user, getFileDetails, fileDetails } = useContext(GithubContext);
  useEffect(() => {
    getFileDetails(location.state.repoDetail.download_url);
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
